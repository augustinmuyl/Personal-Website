import { styles } from "@/app/styles";

function Profile() {
    return (
        <div className={`${styles.sectionBox} gap-8`}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png" //"https://media.licdn.com/dms/image/v2/D4E03AQHCNqe5NW46-A/profile-displayphoto-shrink_200_200/B4EZRnDs5ZGgAY-/0/1736895811582?e=2147483647&v=beta&t=Y9fSewqHimTfUpQTZ99PgQNdokz82ELL3VMNUcSV2L8"
                alt="PFP"
                className="rounded-full size-64"
            />
            <ul className="flex flex-col justify-center items-center gap-1">
                <p className="text-xl">Hello, I am</p>
                <h1 className="font-bold text-5xl">Augustin Muyl</h1>
                <p className="text-xl">Boston University Student</p>
                <ul className="flex justify-center items-center gap-5 mt-4">
                    <a href="https://linkedin.com/in/augustinmuyl">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                            alt="LinkedIn"
                            className="size-12 hover:scale-125 transition-all duration-300"
                        />
                    </a>
                    <a href="https://github.com/augustinmuyl">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="GitHub"
                            className="invert size-12 hover:scale-125 transition-all duration-300"
                        />
                    </a>
                </ul>
            </ul>
        </div>
    );
}

export default Profile;
