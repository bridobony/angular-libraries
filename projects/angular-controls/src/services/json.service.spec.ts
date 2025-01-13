import { TestBed } from '@angular/core/testing';
import { JsonService } from './json.service'; // Ensure correct path
import { from } from 'rxjs';
import { AngularControlsModule } from '../lib/angular-controls.module';

describe('JsonService', () => {
  let service: JsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularControlsModule]
    });
    service = TestBed.inject(JsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getModel', () => {
    it('should fetch and return parsed JSON data', (done: DoneFn) => {
      const jsonUrl = 'test/test.json';
      const mockResponse = { key: 'value' };

      // Spy on fetch to provide a mock response
      spyOn(window, 'fetch').and.returnValue(
        Promise.resolve(
          new Response(JSON.stringify(mockResponse), {
            status: 200,
            headers: { 'Content-type': 'application/json' }
          })
        )
      );

      service.getModel<typeof mockResponse>(jsonUrl).subscribe({
        next: (data) => {
          expect(data).toEqual(mockResponse);
          done();
        },
        error: (error) => {
          fail('Expected a successful fetch, but got an error: ' + error);
          done();
        }
      });
    });

    it('should handle fetch errors', (done: DoneFn) => {
      const jsonUrl = 'test/test1.json';

      // Spy on fetch to provide a mock error response
      spyOn(window, 'fetch').and.returnValue(
        Promise.resolve(
          new Response('Error', {
            status: 500,
            statusText: 'Internal Server Error'
          })
        )
      );

      service.getModel<any>(jsonUrl).subscribe({
        next: () => {
          fail('Expected an error response');
          done();
        },
        error: (error) => {
          expect(error.message).toContain('Network response was not ok');
          done();
        }
      });
    });
  });
});
