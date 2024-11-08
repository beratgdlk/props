import userPlaceholderImg from "./assets/img/Portrait_Placeholder.png";

export function User({
  photoSrc = userPlaceholderImg,
  firstName,
  lastName,
  email,
  birthDay,
  address,
  phone,
  gender = "Unknown",
  ...rest
}) {
  return (
    <div {...rest}>
      <img width={200} height={200} src={photoSrc}></img>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Email: {email}</div>
      <div>Birthday: {birthDay}</div>
      <div>Address: {address}</div>
      <div>Phone: {phone}</div>
      <div>Gender: {gender}</div>
    </div>
  );
}
