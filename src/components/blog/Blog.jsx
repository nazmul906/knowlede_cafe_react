import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div className="Blog">
      <h2 className="titleQA">Questions and Answer</h2>
      <h3>State vs Props</h3>
      <p>
        Main difference between state and props is that state is mutable or
        changable where props is read only data, means you can't change or
        update it.
      </p>
      <h3>How does useState work?</h3>
      <p>
        We know that useState is a react hook, which is used to observe the
        update of an state as state is changable.
        <br />
        Example: const [toastCount, setToastCount] = useState(0)
        <br /> Here useState() has two element.First is an initial state ,
        second is an function,so it returns the array which contains the current
        state and a function.We have to declare a initial state ,here we declare
        initial state of toastCount as '0' with useState.Then we can change the
        state of toastCount using the setToastCount function which can be
        invoked by eventHandler.Usestate can store any type of value such as
        string,array, boolean,object and function.
        <br />
        So when we need to change a variable data and track it's change we use
        useState().Thats how useState() work.
      </p>
      <h3>Purpose of useEffect other than fetching data?</h3>
      <p>
        purpose of useEffect other than fetching data could be updating the Dom
        <br />
        Example: As we use react toaster on project we can see notify() is
        called multiple time ,whenever dom is updated , to solve it we make
        useffect() to set dependecy of state to conditionally update the DOM.So
        when clicked twice in bookmark then only once notify is updated.
      </p>

      <h3>How does React work?</h3>
      <p>
        React is a JS library which work creating a virtual Dom in its memory,
        react detect difference between virtual and original Dom with DIFF
        Algortihm and only change that part of the tree means only render that
        changed part int he component, so it is faster.
      </p>
    </div>
  );
};

export default Blog;
