import "../styles/final.css";
function ProfileHeader({ fullName, title, pic }) {
  return (
    <section id="profileHeader">
      <div id="name--cont">
        <p id="fullName">{fullName}</p>
        <span id="title">{title}</span>
      </div>
      <img src={pic} id="profilePic" />
    </section>
  );
}

export default ProfileHeader;
