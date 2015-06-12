describe("Person", function() {


// to spy on an existing function you don't touch::::

  // to make sure the 'sayhello' method was called:when we call the 'helloSomeone' function:
  it("calls the sayHello function", function() {
    var fakePerson = new Person();
    spyOn(fakePerson, "sayHello");
    fakePerson.helloSomeone("world");
    expect(fakePerson.sayHello).toHaveBeenCalled();
  });

  // to make sure that 'helloSomeone' is called with 'world' as its argment:
  it("greets the world", function() {
    var fakePerson = new Person();
    spyOn(fakePerson, "helloSomeone");
    fakePerson.helloSomeone("world");
    // expect(fakePerson.helloSomeone).toHaveBeenCalledWith("world");
    expect(fakePerson.helloSomeone).not.toHaveBeenCalledWith("foo");
  });

// to spy on an existing function that you MODIFY; use of jasmin.createSpy() ::::

  // with jasmine you can 'empty' the contents of the function while you're testing:
  it("says hello", function() {
    var fakePerson = new Person();
    fakePerson.sayHello = jasmine.createSpy("say-hello spy");
    fakePerson.helloSomeone("world");
    expect(fakePerson.sayHello).toHaveBeenCalled();
  });

  // you can specify that a Spy function return something::::
  it("says hello", function() {
    var fakePerson = new Person();
    fakePerson.sayHello = jasmine.createSpy("'say-hello' spy").andReturn("ello ello");
    fakePerson.helloSomeone("world");
    expect(fakePerson.sayHello).toHaveBeenCalled();
  });



  // you can even give your spy functions something to do::::


});
