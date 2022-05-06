import React from "react";

const Blogs = () => {
  return (
    <div className="mx-5 py-14">
      <div>
        <h1 className="text-2xl mb-3">
          01. What is the difference between js and node js?
        </h1>
        <p className="text-justify">
          JavaScript is a programming language, which runs in web browsers.
          Whereas Node.js is an interpreter or running environment for
          JavaScript, which holds a lot of requiring libraries and all.
          JavaScript is basically one standard defining programming language; it
          can run any browser with a default browser running environment. It is
          a very strong language normally used for a web application on any
          verification or any specific business logic. We need to append in the
          screen without page refreshing. JavaScript also helps to use Ajax at
          any time, which helps us call any server-side script for given dynamic
          data based on the requirement. It also helps with generating dynamic
          HTML tables based on business requirement. JQuery is one of the
          popular libraries to make comfortable use of JavaScript by avoiding to
          write a lot of code.
        </p>
      </div>
      <div>
        <h1 className="text-2xl mt-5 mb-3">
          02. When we should use node js and when we should use MongoDB?
        </h1>
        <p className="text-justify">
          Among the multitude of frameworks, Node.js certainly takes the lead.
          Yet, though simple and widely used, the environment is only worth it
          when used correctly. Uptech’s programmers have vast experience
          building complex platforms using Node.js environment. Our team is
          always on the lookout for new challenges. So do not hesitate to
          contact us if you have a promising idea on your mind.
          <br />
          <br />
          NoSQL databases like MongoDB are a good choice when your data is
          document-centric and doesn’t fit well into the schema of a relational
          database, when you need to accommodate massive scale, when you are
          rapidly prototyping, and a few other use cases. MongoDB is the most
          popular of the new breed of non-relational NoSQL databases.
          Specifically, it’s a document database, also called a
          document-oriented database or a document store.
        </p>
      </div>
      <div>
        <h1 className="text-2xl mt-5 mb-3">
          03. What is the purpose of using jwt token and how it works ?
        </h1>
        <p className="text-justify">
          SQL databases are a type of system software that supports management,
          analysis, capturing and querying the structured data in a relational
          format. NoSQL databases are a type of software that allows to maintain
          and retrieve structured, unstructured, polymorphic data for different
          purposes. A language used to communicate with databases for storage,
          deletion, updation, insertion and retrieval of data. A software to
          retrieve, store and manage scalability of databases.SQL was developed
          in the year 1970 for flat file storage problems.NoSQL was developed in
          2000 as an enhanced version for SQL databases for unstructured and
          semi-structured data.Vertically Scalable (Add resources to increase
          the capacity of the existing hardware and software). Horizontally
          Scalable (Changing small nodes with larger nodes to increase the
          capacity of the existing hardware and software).
        </p>
      </div>
      <div>
        <h1 className="text-2xl mt-5 mb-3">
          04. What is the difference between sql and nosql?
        </h1>
        <p className="text-justify">
          JWT, or JSON Web Token, is an open standard used to share information
          between two parties securely — a client and a server. In most cases,
          it’s an encoded JSON containing a set of claims and a signature. It’s
          usually used in the context of other authentication mechanisms like
          OAuth, OpenID to share user-related information. It’s also a popular
          way to authenticate/authorize users in a microservice architecture.
          <br />
          When it comes to API authentication and server-to-server
          authorization, JSON web token (JWT) is particularly a useful
          technology. In terms of Single Sign-On (SSO), it means that a service
          provider can receive trustworthy information from the authentication
          server. By sharing a secret key with the Identity Provider, the
          Service Provider can hash a part of a token it receives and compare it
          to the signature of the token. Now, if that result matches the
          signature, the SP knows that the information provided has come from
          the other entity possessing the key.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
