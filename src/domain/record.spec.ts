import { Record } from "../domain/record";

describe("record", () => {
  it("it should be possible to call the record ", () => {
    const record = new Record();

    expect(record).toBeDefined();
  });
});
