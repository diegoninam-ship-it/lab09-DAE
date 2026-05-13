type ProfileProps = {
    name: string;
    role: string;
}

const Profile = ({ name, role }: ProfileProps) => {
    return (
        <header>
            <h1>{name}</h1>
            <h2>{role}</h2>
        </header>
    );
}

export default Profile;