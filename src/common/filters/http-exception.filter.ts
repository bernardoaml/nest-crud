import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    Logger,
  } from '@nestjs/common';
  import { Response } from 'express';
  import { Prisma } from '@prisma/client';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionsFilter.name);
  
    catch(exception: unknown, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
  
      let status = HttpStatus.INTERNAL_SERVER_ERROR;
      let message = 'Erro interno do servidor';
      let error = null;
  
      if (exception instanceof HttpException) {
        status = exception.getStatus();
        const exceptionResponse = exception.getResponse();
        message =
          typeof exceptionResponse === 'string'
            ? exceptionResponse
            : (exceptionResponse as any).message || message;
        error =
          typeof exceptionResponse === 'object' && (exceptionResponse as any).error
            ? (exceptionResponse as any).error
            : null;
      }
  
      else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
        if (exception.code === 'P2002') {
          status = HttpStatus.BAD_REQUEST;
          message = `Campo único duplicado: ${(exception.meta?.target as string[]).join(', ')}`;
        }
  
        if (exception.code === 'P2025') {
          status = HttpStatus.NOT_FOUND;
          message = 'Registro não encontrado';
        }
      }
  
      this.logger.error({
        status,
        message,
        exception,
      });
  
      response.status(status).json({
        statusCode: status,
        message,
        error: error || 'Erro',
        timestamp: new Date().toISOString(),
      });
    }
  }
  