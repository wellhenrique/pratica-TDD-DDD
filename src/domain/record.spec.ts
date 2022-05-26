import { Record } from "../domain/record";

const fakeProps = {
  name: "fake_name",
  age: 111,
  course: "fake_course",
  document: "fake_document",
  status: "fake_status",
};

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

  it("must ensure that document can be passedd", () => {
    const record = new Record();
    record.execute = jest.fn();
    record.execute({ ...fakeProps, document: "any_document" });

    expect(record.execute).toBeCalledTimes(1);
    expect(record.execute).toBeCalledWith({
      ...fakeProps,
      document: "any_document",
    });
  });

  it("must ensure that status can be passedd", () => {
    const record = new Record();
    record.execute = jest.fn();
    record.execute({ ...fakeProps, status: "any_status" });

    expect(record.execute).toBeCalledTimes(1);
    expect(record.execute).toBeCalledWith({
      ...fakeProps,
      status: "any_status",
    });
  });
});
