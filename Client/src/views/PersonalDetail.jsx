import { useSelector } from "react-redux";
import { useState } from "react";
import img from "../assets/images/user-default.png"
import Nav from "../components/Nav/Nav";

const PersonalDetail = () => {
  const user = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.auth.user);
  const [showPassword, setShowPassword] = useState(false);
  const theme = useSelector((state) => state.themes.theme);

  const backgroundColor = theme === "dark" ? "#212121" : "#F3F4F6";
  const cartBackGround = theme === "dark" ? "#1c1c1c" : "#FFFFFF";
  const letrasPlomas = theme === "dark" ? "#bcbcbc" : "#434343";
  const textColor = theme === "dark" ? "#ECECEC" : "#2b2b2b";
  const bordesPlomos = theme === "dark" ? "#4a4a4a" : "#DDDDDD";

  return (
    <div className="pb-10 min-h-screen" style={{ background: backgroundColor }}>
      <Nav />
      <div
        className="max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow-lg"
        style={{ background: cartBackGround }}
      >
        <div className="flex items-center mb-6">
          {!user.picture === "" ? (
            <img
              src={img}
              alt={user.name}
              className="rounded-full border border-gray-400 p-2 hover:border-secondary w-28 h-28 mr-5"
            />
          ) : (
            <img
              src={user.picture}
              alt={user.name}
              className="rounded-full border border-gray-400 p-2 hover:border-secondary w-28 h-28 mr-5"
            />
          )}

          <div>
            <h1 className="text-2xl font-bold" style={{ color: textColor }}>
              {`${user.name} ${user.lastname || ""}`}
            </h1>
            <p className="text-gray-600" style={{ color: letrasPlomas }}>{user.email}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div
            className="flex items-center text-left p-4 border rounded-lg justify-between w-full flex-grow"
            style={{ borderColor: bordesPlomos }}
          >
            <div>
              <h2 className="text-xl font-semibold" style={{ color: textColor }}>
                Personal
              </h2>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Name: {user.name}
              </p>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Lastname: {`${user.lastname || "N/A"}`}
              </p>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Document: {`${user.nro_document || "N/A"}`}
              </p>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                State: {`${user.state || "N/A"}`}
              </p>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                City: {`${user.city || "N/A"}`}
              </p>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Birth Date: {`${user.birthdate || "N/A"}`}
              </p>
            </div>
          </div>
          <div
            className="flex items-center text-left p-4 border rounded-lg justify-between w-full flex-grow"
            style={{ borderColor: bordesPlomos }}
          >
            <div>
              <h2 className="text-xl font-semibold" style={{ color: textColor }}>
                Account Data
              </h2>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Email: {user.email}
              </p>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Phone number: {`${user.phone_number || "N/A"}`}
              </p>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Document: {`${user.nro_document || "N/A"}`}
              </p>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Creation Date: {`${user.date_creation || "N/A"}`}
              </p>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Account Type: {`${user.user_type || "N/A"}`}
              </p>
            </div>
          </div>
          <div
            className="flex items-center text-left p-4 border rounded-lg justify-between w-full flex-grow"
            style={{ borderColor: bordesPlomos }}
          >
            <div>
              <h2 className="text-xl font-semibold" style={{ color: textColor }}>
                Security
              </h2>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Password:
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 mr-4 border rounded-lg pl-1 pr-1 hover:border-secondary"
                  style={{ borderColor: bordesPlomos }}
                >
                  {showPassword
                    ? `${user.password || "N/A"}`
                    : "************"}
                </button>
              </p>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Phone number: {`${user.phone_number || "N/A"}`}
              </p>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Email verified:{" "}
                {`${user.email_verified || "Awaiting verification"}`}
              </p>
              <p className="text-gray-600" style={{ color: letrasPlomas }}>
                Creation Date: {`${user.date_creation || "N/A"}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
