import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });

  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(service.add(2, 4)).toBe(6);
    });
    it('should add two negative numbers', () => {
      expect(service.add(-2, -6)).toBe(-8);
    });
    it('should add zero', () => {
      expect(service.add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(service.subtract(5, 2)).toBe(3);
    });
    it('should handle negative operation', () => {
      expect(service.subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(service.multiply(3, 4)).toBe(12);
    });

    it('should multiply by zero', () => {
      expect(service.multiply(5, 0)).toBe(0);
    });

    it('should multiply negative numbers', () => {
      expect(service.multiply(-2, -3)).toBe(6);
    });
  });
});
