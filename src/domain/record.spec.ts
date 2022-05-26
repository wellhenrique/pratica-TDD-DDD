import { Record } from "@/domain/record";

describe("record", () => {
  const fakeRecord = {
    name: "fake_name",
  };
  it("it should be possible to call the record ", () => {
    const record = new Record();

    expect(record).toBeDefined();
  });

  it("it should be possible to call execute method on the record ", () => {
    const record = new Record();
    record.execute = jest.fn();

    record.execute(fakeRecord);

    expect(record).toBeCalledTimes(1);
  });

  it("it should be possible to call the execute method passing the name parameters in the registry ", () => {
    const record = new Record();
    record.execute = jest.fn();

    record.execute({ ...fakeRecord, name: "any_student" });

    expect(record).toBeCalledTimes(1);
    expect(record).toBeCalledWith({ name: "any_student" });
  });
});
