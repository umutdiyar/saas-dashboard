export type ApiResponse<T> = { data: T };

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function mockGet<T>(
  data: T,
  opts?: { minDelay?: number; maxDelay?: number; failRate?: number },
): Promise<ApiResponse<T>> {
  const minDelay = opts?.minDelay ?? 700;
  const maxDelay = opts?.maxDelay ?? 1200;
  const failRate = opts?.failRate ?? 0.1;

  const delay =
    Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
  await sleep(delay);

  if (failRate > 0 && Math.random() < failRate) {
    throw new Error("Mock API error");
  }
  return { data };
}
