import { AuthInterceptor } from './auth.interceptor';
import { HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../services/auth.service.ts.service'; 

describe('AuthInterceptor', () => {
  let interceptor: AuthInterceptor;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    // Cria um mock do AuthService com Jasmine
    mockAuthService = jasmine.createSpyObj('AuthService', ['getToken']);
    mockAuthService.getToken.and.returnValue('fake-jwt-token');

    interceptor = new AuthInterceptor(mockAuthService);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header if token exists', () => {
    const req = new HttpRequest('GET', '/api/test');
    const next: HttpHandler = {
      handle: (req) => {
        expect(req.headers.get('Authorization')).toBe('Bearer fake-jwt-token');
        return {
          subscribe: () => {},
          pipe: () => ({})
        } as any;
      }
    };

    interceptor.intercept(req, next);
  });
});
