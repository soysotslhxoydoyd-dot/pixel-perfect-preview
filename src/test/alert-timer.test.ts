import { describe, expect, it } from "vitest";

import { secondsLeft } from "@/lib/alert-timer";

describe("alerta de nova mensagem", () => {
  it("começa com 10 segundos", () => {
    expect(secondsLeft(1000, 1000)).toBe(10);
  });
  it("chega a zero depois de 10 segundos", () => {
    expect(secondsLeft(1000, 11000)).toBe(0);
  });
  it("calcula certo ao voltar de segundo plano", () => {
    expect(secondsLeft(0, 7200)).toBe(3);
    expect(secondsLeft(0, 60000)).toBe(0);
  });
});
