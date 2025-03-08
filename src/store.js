import { defineStore } from "pinia";
import { reactive } from "vue";

export const useData = defineStore("data", () => {
    const author = reactive({
        name: "Dicki D. Saputra",
        title: "Software Engineer",
        subtitle: "Currently specializing in Backend",
        about: "I am an experienced Software Engineer with 3+ years of experience and currently specializing in Backend. I specialize in developing robust, scalable, and efficient systems. With a focus on clean, maintainable code, and I’m always eager to collaborate with teams, adopt new technologies, and continue growing. Currently I am also taking Go-Lang and Vue JS courses to improve my skills, and you can check to my GitHub repository.",
        address: "Bengkayang - West Kalimantan, Indonesia."
    });

    const contact = reactive({
        email: "dickidarmawansaputra@gmail.com",
        linkedin: "https://www.linkedin.com/in/dickidarmawansaputra",
        github: "https://github.com/dickidarmawansaputra",
    });

    function authorName() {
        return author.name;
    }

    function authorTitle() {
        return author.title;
    }

    function authorSubtitle() {
        return author.subtitle;
    }

    function authorAbout() {
        return author.about;
    }

    function authorAddress() {
        return author.address;
    }

    function contactGithub() {
        return contact.github;
    }

    function contactEmail() {
        return contact.email;
    }

    function contactLinkedin() {
        return contact.linkedin;
    }

    return {
        authorName,
        authorTitle,
        authorSubtitle,
        authorAbout,
        authorAddress,
        contactGithub,
        contactEmail,
        contactLinkedin,
    }
});