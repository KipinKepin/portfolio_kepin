import dashboardImg from "../assets/ukm/dashboard.jpeg"
import lowonganImg from "../assets/lowongan/lowongan.jpeg"
import rkaImg from "../assets/rka/WorkPlan.png"

const ProjectData = [
    {
        imgSrc: dashboardImg,
        title: "Kemahasiswaan IT Del",
        text: "Website ini merupakan website yang dibangun khusus agar dapat digunakan oleh Lembaga Kemahasiswaan. Website ini menyajikan informasi yang berkaitan dengan kemahasiswaan di IT Del",
        tech: "Laravel, Bootstrap"
    },
    {
        imgSrc: lowonganImg,
        title: "Lowongan Pekerjaan IT Del",
        text: "Website ini merupakan website yang dibangun khusus agar dapat digunakan oleh pelamar untuk melamar pekerjaan di IT Del dan digunakan oleh HRD untuk melihat pelamar yang melamar pekerjaan",
        tech: "Express JS, React Js, Bulma CSS"
    },
    {
        imgSrc: rkaImg,
        title: "Rencana Kerja dan Anggaran IT Del",
        text: "Website ini merupakan website yang dibangun khusus agar dapat digunakan oleh Rektor s/d Kaprodi dalam mengelola keuangan yang ada di IT Del",
        tech: "Laravel, Tailwind CSS"
    }
]

export default ProjectData;