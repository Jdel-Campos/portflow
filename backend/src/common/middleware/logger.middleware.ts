import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const start = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const duration = Date.now() - start;

      const logMessage = `${method} ${originalUrl} ${statusCode} - ${duration}ms - IP: ${ip}`;

      if (process.env.NODE_ENV !== 'production') {
        this.logger.log(logMessage);
      } else if (statusCode >= 400) {
        this.logger.warn(logMessage);
      }
    });

    next();
  }
}
