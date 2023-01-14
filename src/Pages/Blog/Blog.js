/* import React from 'react'

const Blog = () => {
  return (
    <div className="mx-5 my-5 ">
        <h1 className="text-center text-3xl py-5 font-bold">Blog</h1>
      <h1 className='text-xl font-semibold'>
       
        What are the different ways to manage a state in a React application?
      </h1>
      <p>
        In modern React, we build our applications with functional components.
        Components are themselves JavaScript functions, independent and reusable
        bits of code. The purpose of building the application with components is
        to have a modular architecture, with a clear separation of concerns.
        This makes code easier to understand, easier to maintain, and easier to
        reuse when possible. The state is an object that holds information about
        a certain component. Plain JavaScript functions don't have the ability
        to store information. The code within them executes and 
        once the execution is finished. But thanks to state, React functional
        components can store information even after execution. When we need a
        component to store or "remember" something, or to act in a different way
        depending on the environment, state is what we need to make it work this
        way.
      </p>
      <h1 className='text-xl font-semibold'>
       
        How does prototypical inheritance work?
      </h1>
      <p>
        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
      </p>
      <h1 className='text-xl font-semibold'>
       
        What is a unit test? Why should we write unit tests?
      </h1>
      <p>
        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
      </p>
      <h1 className='text-xl font-semibold'>
       
        React vs. Angular vs. Vue?

      </h1>
      <p>
        Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
      </p>
    </div>
  )
}

export default Blog */

import React from "react";

const Blog = () => {
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold mt-10  text-purple-600">
        Our Blogs
      </h1>
      <div className="card w-[70%] mx-auto bg-sky-300 shadow-xl my-10">
        <div className="card-body">
          <h2 className=" font-bold text-xl text-orange-700">
            1.What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="font-bold ">
            We can manage state in a React application in the following ways-
            useState: useState hook is a hook used to manipulate and update a
            functional component. The hook takes one argument which is the
            initial value of a state and returns a state variable and a function
            to update it. useReducer: useReducer hook is similar to the useState
            hook. However it's able to handle more complex logic regarding the
            state updates. It takes two arguments: a reducer function and an
            initial state. The hook then returns the current state of the
            component and a dispatch function useContext: React Context is a way
            to manage state globally. It can be used together with the useState
            Hook to share state between deeply nested components more easily
            than with useState alone.
          </p>
        </div>
      </div>
      <div className="card w-[70%] mx-auto bg-sky-300 shadow-xl my-10">
        <div className="card-body">
          <h2 className="font-bold text-xl  text-orange-700">
            {" "}
            2.How does prototypical inheritance work?
          </h2>
          <p className="font-bold">
            Prototypical inheritance refers to the ability to access object
            properties from another object. We use a JavaScript prototype to add
            new properties and methods to an existing object constructor. We can
            then essentially tell our JS code to inherit properties from a
            prototype. Prototypical inheritance allows us to reuse the
            properties or methods from one JavaScript object to another through
            a reference pointer function.
          </p>
        </div>
      </div>
      <div className="card w-[70%] mx-auto bg-sky-300 shadow-xl my-10">
        <div className="card-body">
          <h2 className="font-bold text-xl text-orange-700">
            3.What is a unit test? Why should we write unit tests?
          </h2>
          <p className="font-bold">
            In computer programming, unit testing is a software testing method
            by which individual units of source code—sets of one or more
            computer program modules together with associated control data,
            usage procedures, and operating procedures—are tested to determine
            whether they are fit for use. Unit testing ensures that all code
            meets quality standards before it's deployed. This ensures a
            reliable engineering environment where quality is paramount. Over
            the course of the product development life cycle, unit testing saves
            time and money, and helps developers write better code, more
            efficiently.
          </p>
        </div>
      </div>
      <div className="card w-[70%] mx-auto bg-sky-300 shadow-xl my-10">
        <div className="card-body">
          <h2 className="font-bold text-xl text-orange-700">
            4.React vs. Angular vs. Vue?
          </h2>
          <p className="font-bold">
            React: React gives you only one thing: A library for rendering
            content to the DOM and controlling it efficiently thereafter. It's
            also all about components and all about building user interfaces
            from components. It also gives you all the "tools" you need to
            define what should be rendered in which way under which
            circumstances. But it does not include built-in form validation
            support. It does not include a router (for rendering different
            components based on URL changes) and it does not ship its own Http
            client. Angular: Angular definitely is the "biggest" framework of
            the three. It's sometimes even called a "platform" rather than a
            framework. Because Angular out of the box includes support for a lot
            of things. It helps you with controlling the UI, reacting to user
            input, validating user input in forms, routing, state management
            sending Ajax Http requests, providing offline support & PWA
            capabilities, testing, building your application, managing multiple
            applications and connecting them and much, much more!. Vue: Vue is a
            framework which kind of sits between React and Angular. It's not as
            "big" as Angular but it definitely includes more features than React
            does. Vue does give you built-in state management and it also ships
            with a built-in router. It does, however, not include form
            validation or Http client functionalities. Just like Angular and
            React, the core of Vue is all about building user interfaces by
            combining re-usable components. But beyond that, it gives you a bit
            more than React and a bit less than Angular.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
