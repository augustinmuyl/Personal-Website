function PurpleButton({ text, link }) {
    return (
        <a href={link}>
            <button
                className="border-4 border-violet-200 rounded-3xl p-3
                text-violet-200 font-bold text-2xl hover:text-slate-800 hover:bg-violet-200"
            >
                {text}
            </button>
        </a>
    );
}

export default PurpleButton;
