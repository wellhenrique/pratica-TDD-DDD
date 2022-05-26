import { Record } from "../domain/record";

const fakeProps = { name: "fake_name", age: 111, course: "fake_course" };

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

  it("must ensure that name can be passed", () => {
    const record = new Record();
    record.execute = jest.fn();
    record.execute({ ...fakeProps, name: "any_name" });

    expect(record.execute).toBeCalledTimes(1);
    expect(record.execute).toBeCalledWith({ ...fakeProps, name: "any_name" });
  });

  it("must ensure that age can be passed", () => {
    const record = new Record();
    record.execute = jest.fn();
    record.execute({ ...fakeProps, age: 999 });

    expect(record.execute).toBeCalledTimes(1);
    expect(record.execute).toBeCalledWith({ ...fakeProps, age: 999 });
  });

  it("must ensure that course can be passedd", () => {
    const record = new Record();
    record.execute = jest.fn();
    record.execute({ ...fakeProps, course: "any_course" });

    expect(record.execute).toBeCalledTimes(1);
    expect(record.execute).toBeCalledWith({
      ...fakeProps,
      course: "any_course",
    });
  });
});
