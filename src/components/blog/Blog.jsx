import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div className="Blog">
      {/* <h2 >Welcome to my Personal blog</h2> */}
      <h3>State vs Props</h3>
      <p>
        Main difference between state and props is that state is mutable or
        changable where props is only readly only data, means you can't change
        or update it.
      </p>
      <h3>How does useState work?</h3>
      <p>
        We know that useState is a react hook, which is used to observe the
        update of an state as state is changable. So when we need to change a
        variable data and track it's change we use it.
      </p>
      <h3>Purpose of useEffect other than fetching data?</h3>
      <p>
        purpose of useEffect other than fetching data is updating the Dom
        <br />
        Example: As we use react toaster on project we can see notify() is
        called multipple time ,whenever dom update component is updated , to
        solve it we make useffect() to set dependecy of state to conditionally
        update the DOM.So when clicked twice in bookmark then only once notify
        is updated.
      </p>

      <h3>How does React work?</h3>
      <p>
        React is a JS library which work managing a virtual Dom which detect
        difference between virtual and original Dom with DIFF Algortihm and only
        change that part of the component, so it is faster.
      </p>
    </div>
  );
};

export default Blog;
