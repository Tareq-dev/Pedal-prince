import React from "react";

const Blogs = () => {
  return (
    <div className="mx-5 py-14">
      <div>
        <h1 className="text-2xl mb-3">
          01. What is the difference between js and node js?
        </h1>
        <p className="text-justify">
          JavaScript is a scripting language that runs in browsers. Node.js, on
          the other hand, is a JavaScript interpreter or operating environment
          that includes all of the necessary libraries. JavaScript is a single
          defining programming language that can operate in every browser using
          the default browser environment. It's a powerful language that's
          typically used in web applications for verification or specialized
          business logic. We need to add to the screen without refreshing the
          website. JavaScript also allows us to employ Ajax at any moment,
          allowing us to call any server-side script for dynamic data as needed.
          It also aids in the creation of dynamic HTML tables based on company
          needs. JQuery is a popular library for making simple applications.
        </p>
      </div>
      <div>
        <h1 className="text-2xl mt-5 mb-3">
          02. When we should use node js and when we should use MongoDB?
        </h1>
        <p className="text-justify">
          Node.js is perhaps the most popular framework among the several
          available. Despite its simplicity and widespread usage, the
          environment is only worthwhile when utilized properly. Uptech's
          programmers have a lot of expertise with Node.js and constructing
          complicated systems. Our team is continuously looking for new
          challenges to take on. So please do not hesitate to contact us if you
          have a great suggestion.
          <br />
          <br />
          When your data is document-centric and doesn't fit well into the
          schema of a relational database, when you need to support vast
          scalability, when you're fast prototyping, and a few other use cases,
          NoSQL databases like MongoDB are an excellent alternative. The most
          well-known of the new breed of non-relational NoSQL databases is
          MongoDB. It's a document database, sometimes known as a document
          repository.
        </p>
      </div>
      <div>
        <h1 className="text-2xl mt-5 mb-3">
          03. What is the purpose of using jwt token and how it works ?
        </h1>
        <p className="text-justify">
          SQL databases are a sort of database management system that allows you
          to manage, analyze, capture, and query structured data in a relational
          manner. NoSQL databases are a form of software that allows you to
          retain data without using SQL. for multiple types of organized,
          unstructured, and polymorphic data purposes. A language for
          communicating with databases for storage purposes. Data deletion,
          updating, insertion, and retrieval a program for Database scalability
          may be retrieved, stored, and managed. SQL was created. around 1970 to
          solve flat file storage issues NoSQL was created in 1999. 2000 as an
          improved version of SQL databases for unstructured and structured
          data. resources by adding more). the present gear and software's
          capabilities). Horizontally (To increase the number of nodes, replace
          tiny ones with larger ones.) the present hardware's capabilities.
        </p>
      </div>
      <div>
        <h1 className="text-2xl mt-5 mb-3">
          04. What is the difference between sql and nosql?
        </h1>
        <p className="text-justify">
          JWT (JSON Web Token) is an open standard for securely exchanging data
          between two parties - a client and a server. It's usually an encoded
          JSON file with a collection of claims and a signature. It's typically
          used in conjunction with other authentication protocols such as OAuth
          and OpenID to exchange user-related data. In a microservice design,
          it's also a common approach to authenticate and authorize users.
          <br />
          JSON web token (JWT) is a particularly helpful tool for API
          authentication and server-to-server permission. Single Sign-On (SSO)
          refers to the ability for a service provider to get reliable
          information from the authentication server. The Service Provider can
          hash a portion of a token it gets by exchanging a secret key with the
          Identity Provider and compare it to the token's signature If the
          result matches the signature, the SP knows that the information was
          supplied by the other entity who possesses the key.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
