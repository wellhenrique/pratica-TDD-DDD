import { Record } from "../domain/record";

const fakeProps = { props: "fake_props" };

describe("record", () => {
  it("it should be possible to call the record ", () => {
    const record = new Record();

    expect(record).toBeDefined();
  });

  it("it should be possible to call the execute method", () => {
    const record = new Record();
    record.execute = jest.fn();

    record.execute(fakeProps);

    expect(record.execute).toBeCalledTimes(1);
  });

  it("it should be possible to call the execute method and pass the properties", () => {
    const record = new Record();
    record.execute = jest.fn();
    record.execute({ ...fakeProps, props: "any_props" });

    expect(record.execute).toBeCalledTimes(1);
    expect(record.execute).toBeCalledWith({ props: "any_props" });
  });
});
