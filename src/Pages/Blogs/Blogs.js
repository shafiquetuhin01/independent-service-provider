import React from "react";

const Blogs = () => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <h3>This is blog page</h3>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mt-2 bg-secondary p-1 text-white">
                What is the difference between authorization vs authentication?
              </h4>
              <h6>
                Ans: Both Authentication and Authorization area unit utilized in
                respect of knowledge security that permits the safety on an
                automatic data system. Each area unit terribly crucial topics
                usually related to the online as key items of its service
                infrastructure. However, each the terms area unit terribly
                completely different with altogether different ideas. whereas
                it’s true that they’re usually employed in an equivalent context
                with an equivalent tool, they’re utterly distinct from one
                another.
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mt-2 bg-secondary p-1 text-white">
                Why are you using `firebase`? What other options do you have to
                implement authentication?
              </h4>
              <h6>
                Ans: Firebase is a set of tools offered by Google to build
                excellent scalable applications in the cloud. It is a powerful
                service that helps in building applications quickly without
                reinventing the components or modules. Services like analytics,
                authentication, databases, configuration, file storage, push
                messaging are provided by firebase thereby making it easy for
                the developers to focus on the user experience of the
                application.
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mt-2 bg-secondary p-1 text-white">
                What other services does `firebase` provide other than
                authentication ?
              </h4>
              <h6>
                Ans: Most apps need to know the identity of a user. Knowing a
                user's identity allows an app to securely save user data in the
                cloud and provide the same personalized experience across all of
                the user's devices. Firebase Authentication provides backend
                services, easy-to-use SDKs, and ready-made UI libraries to
                authenticate users to your app. It supports authentication using
                passwords, phone numbers, popular federated identity providers
                like Google, Facebook and Twitter, and more. Firebase
                Authentication integrates tightly with other Firebase services,
                and it leverages industry standards like OAuth 2.0 and OpenID
                Connect, so it can be easily integrated with your custom
                backend.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
