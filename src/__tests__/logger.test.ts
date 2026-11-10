import { logVisitor, logEnquiry } from '@/lib/logger';
import { VisitorData, EnquiryData } from '@/types';

describe('Logger', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('logVisitor', () => {
    it('should log visitor data to console', () => {
      const visitorData: VisitorData = {
        ip: '192.168.1.1',
        location: 'Test City',
        browser: 'Chrome',
        os: 'Windows',
        device: 'Desktop',
        page: '/home',
        referrer: 'https://google.com',
        userAgent: 'Mozilla/5.0',
        language: 'en',
        timezone: 'UTC',
        timestamp: '2025-01-15T10:00:00Z',
      };

      logVisitor(visitorData);

      expect(consoleSpy).toHaveBeenCalled();
      const loggedData = JSON.parse(consoleSpy.mock.calls[0][0]);
      expect(loggedData.type).toBe('visitor');
      expect(loggedData.ip).toBe('192.168.1.1');
      expect(loggedData.browser).toBe('Chrome');
    });

    it('should include timestamp in logged data', () => {
      const visitorData: VisitorData = {
        ip: '192.168.1.1',
        location: 'Test City',
        browser: 'Chrome',
        os: 'Windows',
        device: 'Desktop',
        page: '/home',
        referrer: 'https://google.com',
        userAgent: 'Mozilla/5.0',
        language: 'en',
        timestamp: '2025-01-15T10:00:00Z',
      };

      logVisitor(visitorData);

      const loggedData = JSON.parse(consoleSpy.mock.calls[0][0]);
      expect(loggedData.timestamp).toBeTruthy();
    });

    it('should sanitize log input containing newlines', () => {
      const visitorData: VisitorData = {
        ip: '192.168.1.1',
        location: 'Test\nCity',
        browser: 'Chrome\r\nBot',
        os: 'Windows',
        device: 'Desktop',
        page: '/home',
        referrer: '',
        userAgent: 'Mozilla/5.0',
        language: 'en',
        timestamp: '2025-01-15T10:00:00Z',
      };

      logVisitor(visitorData);

      const loggedData = JSON.parse(consoleSpy.mock.calls[0][0]);
      expect(loggedData.location).not.toContain('\n');
      expect(loggedData.browser).not.toContain('\r');
    });

    it('should handle missing optional fields', () => {
      const visitorData: VisitorData = {
        ip: '192.168.1.1',
        browser: 'Chrome',
        os: 'Windows',
        device: 'Desktop',
        page: '/home',
        referrer: '',
        userAgent: 'Mozilla/5.0',
        language: 'en',
        timestamp: '2025-01-15T10:00:00Z',
      };

      logVisitor(visitorData);

      expect(consoleSpy).toHaveBeenCalled();
      const loggedData = JSON.parse(consoleSpy.mock.calls[0][0]);
      expect(loggedData.location).toBe('');
      expect(loggedData.timezone).toBe('');
    });
  });

  describe('logEnquiry', () => {
    it('should log enquiry data to console', () => {
      const enquiryData: EnquiryData = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        service: 'Fire Alarm Installation',
        message: 'Test message',
      };

      logEnquiry(enquiryData, 'Email Sent');

      expect(consoleSpy).toHaveBeenCalled();
      const loggedData = JSON.parse(consoleSpy.mock.calls[0][0]);
      expect(loggedData.type).toBe('enquiry');
      expect(loggedData.name).toBe('John Doe');
      expect(loggedData.email).toBe('john@example.com');
      expect(loggedData.status).toBe('Email Sent');
    });

    it('should use default text for optional fields', () => {
      const enquiryData: EnquiryData = {
        name: 'Jane Doe',
        email: 'jane@example.com',
        contact: '0987654321',
      };

      logEnquiry(enquiryData, 'Logged Only');

      expect(consoleSpy).toHaveBeenCalled();
      const loggedData = JSON.parse(consoleSpy.mock.calls[0][0]);
      expect(loggedData.service).toBe('Not specified');
      expect(loggedData.message).toBe('No message');
    });

    it('should sanitize enquiry fields with special characters', () => {
      const enquiryData: EnquiryData = {
        name: 'John\nDoe',
        email: 'john@example.com',
        contact: '1234567890',
      };

      logEnquiry(enquiryData, 'Logged');

      const loggedData = JSON.parse(consoleSpy.mock.calls[0][0]);
      expect(loggedData.name).not.toContain('\n');
    });

    it('should include timestamp in logged enquiry', () => {
      const enquiryData: EnquiryData = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
      };

      logEnquiry(enquiryData, 'Logged');

      const loggedData = JSON.parse(consoleSpy.mock.calls[0][0]);
      expect(loggedData.timestamp).toBeTruthy();
    });
  });
});
