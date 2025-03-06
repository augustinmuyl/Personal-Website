const styles = {
    sectionHeadText:
        "font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-violet-100",
    sectionBox:
        "bg-slate-900 rounded-3xl p-12 flex justify-center items-center",
    sectionHeadAnimation:
        "initial={{ opacity: 0, x: -250 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.5 }}",
};

export { styles };
