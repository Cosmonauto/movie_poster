import jwt_decode from "jwt-decode";
export default function Button(params) {
  function decodeCode(params) {
    var token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    var decoded = jwt_decode(token);

    console.log(decoded);

    var decodedHeader = jwt_decode(token, { header: true });
    console.log(decodedHeader);
  }
  return <button onClick={decodeCode}>Hi</button>;
}
