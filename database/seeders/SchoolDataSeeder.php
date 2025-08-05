<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\News;
use App\Models\Announcement;
use App\Models\Teacher;
use App\Models\Gallery;
use App\Models\AcademicProgram;
use App\Models\Student;
use App\Models\Grade;

class SchoolDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create News
        News::create([
            'title' => 'Pembukaan Tahun Ajaran Baru 2024/2025',
            'content' => 'MI Plus ANNur dengan bangga mengumumkan pembukaan tahun ajaran baru 2024/2025. Kegiatan ini akan dimulai dengan upacara pembukaan yang khidmat dan pengenalan lingkungan sekolah untuk siswa baru. Kami telah menyiapkan berbagai program unggulan dan fasilitas terbaru untuk mendukung proses pembelajaran yang optimal.',
            'excerpt' => 'MI Plus ANNur membuka tahun ajaran baru dengan program unggulan dan fasilitas terbaru.',
            'is_published' => true,
            'published_at' => now()->subDays(2),
        ]);

        News::create([
            'title' => 'Prestasi Gemilang dalam Olimpiade Matematika Tingkat Kota',
            'content' => 'Siswa-siswi MI Plus ANNur kembali mengharumkan nama sekolah dengan meraih prestasi gemilang dalam Olimpiade Matematika Tingkat Kota Malang. Tiga siswa berhasil masuk dalam 10 besar dan satu siswa meraih juara 2. Prestasi ini merupakan hasil dari program pembinaan khusus yang telah dilaksanakan secara konsisten.',
            'excerpt' => 'Siswa MI Plus ANNur meraih prestasi gemilang dalam Olimpiade Matematika Tingkat Kota.',
            'is_published' => true,
            'published_at' => now()->subDays(5),
        ]);

        News::create([
            'title' => 'Kegiatan Belajar Mengajar dengan Metode Digital Learning',
            'content' => 'Dalam rangka meningkatkan kualitas pembelajaran, MI Plus ANNur telah mengimplementasikan metode Digital Learning yang modern dan interaktif. Setiap kelas dilengkapi dengan proyektor dan akses internet untuk mendukung pembelajaran yang lebih menarik dan efektif.',
            'excerpt' => 'MI Plus ANNur mengimplementasikan Digital Learning untuk meningkatkan kualitas pembelajaran.',
            'is_published' => true,
            'published_at' => now()->subWeek(),
        ]);

        // Create Announcements
        Announcement::create([
            'title' => 'PENTING: Perubahan Jadwal Ujian Tengah Semester',
            'content' => 'Diberitahukan kepada seluruh siswa dan orang tua bahwa jadwal Ujian Tengah Semester (UTS) mengalami perubahan. UTS yang semula dijadwalkan tanggal 15-19 Januari 2024 diundur menjadi tanggal 22-26 Januari 2024. Hal ini dilakukan untuk memberikan waktu persiapan yang lebih optimal bagi siswa.',
            'event_date' => now()->addWeeks(2)->toDateString(),
            'is_urgent' => true,
            'is_published' => true,
        ]);

        Announcement::create([
            'title' => 'Rapat Orang Tua Siswa Semester Genap',
            'content' => 'Mengundang seluruh orang tua siswa untuk menghadiri rapat koordinasi semester genap. Agenda rapat meliputi pembahasan program pembelajaran, evaluasi prestasi siswa, dan rencana kegiatan ekstrakurikuler.',
            'event_date' => now()->addDays(10)->toDateString(),
            'event_time' => '09:00',
            'location' => 'Aula MI Plus ANNur',
            'is_urgent' => false,
            'is_published' => true,
        ]);

        Announcement::create([
            'title' => 'Pendaftaran Ekstrakurikuler Tahun Ajaran Baru',
            'content' => 'Pendaftaran kegiatan ekstrakurikuler untuk tahun ajaran baru telah dibuka. Tersedia berbagai pilihan ekstrakurikuler seperti Pramuka, Robotika, Seni Baca Al-Quran, Olahraga, dan Seni Budaya.',
            'event_date' => now()->addDays(7)->toDateString(),
            'is_urgent' => false,
            'is_published' => true,
        ]);

        // Create Teachers
        Teacher::create([
            'name' => 'Dr. Ahmad Fauzi, M.Pd',
            'nip' => '196501011990031001',
            'position' => 'Kepala Sekolah',
            'subject' => 'Pendidikan Agama Islam',
            'biography' => 'Berpengalaman lebih dari 25 tahun dalam bidang pendidikan Islam. Memiliki komitmen tinggi untuk mengembangkan pendidikan yang mengintegrasikan ilmu pengetahuan umum dengan nilai-nilai Islam.',
            'education' => 'S3 Pendidikan Agama Islam - UIN Malang',
            'phone' => '081234567890',
            'email' => 'fauzi@miplusannur.sch.id',
            'is_active' => true,
        ]);

        Teacher::create([
            'name' => 'Siti Nurhaliza, S.Pd',
            'nip' => '198203152005012001',
            'position' => 'Guru Kelas',
            'subject' => 'Matematika',
            'biography' => 'Guru matematika berpengalaman dengan metode pembelajaran yang inovatif dan menyenangkan. Aktif dalam pengembangan kurikulum dan pembinaan olimpiade matematika.',
            'education' => 'S1 Pendidikan Matematika - UM Malang',
            'phone' => '081234567891',
            'email' => 'nurhaliza@miplusannur.sch.id',
            'is_active' => true,
        ]);

        Teacher::create([
            'name' => 'Muhammad Rizki, S.Pd',
            'nip' => '199001102015031002',
            'position' => 'Guru Kelas',
            'subject' => 'Bahasa Indonesia',
            'biography' => 'Spesialis dalam pembelajaran bahasa Indonesia dengan pendekatan komunikatif. Memiliki pengalaman dalam membimbing siswa dalam berbagai lomba literasi.',
            'education' => 'S1 Pendidikan Bahasa Indonesia - UM Malang',
            'phone' => '081234567892',
            'email' => 'rizki@miplusannur.sch.id',
            'is_active' => true,
        ]);

        Teacher::create([
            'name' => 'Fatimah Az-Zahra, S.Pd.I',
            'nip' => '198807201012012001',
            'position' => 'Koordinator Tahfidz',
            'subject' => 'Tahfidz Al-Quran',
            'biography' => 'Hafidzah Al-Quran dengan metode pembelajaran tahfidz yang efektif dan menyenangkan. Berpengalaman dalam pembinaan hafalan Al-Quran untuk anak-anak.',
            'education' => 'S1 Pendidikan Agama Islam - UIN Malang',
            'phone' => '081234567893',
            'email' => 'fatimah@miplusannur.sch.id',
            'is_active' => true,
        ]);

        // Create Gallery
        Gallery::create([
            'title' => 'Kegiatan Pembelajaran di Kelas',
            'description' => 'Suasana pembelajaran yang kondusif dan interaktif di salah satu kelas MI Plus ANNur',
            'image' => 'learning-class.jpg',
            'category' => 'Pembelajaran',
            'is_featured' => true,
        ]);

        Gallery::create([
            'title' => 'Laboratorium Komputer',
            'description' => 'Fasilitas laboratorium komputer dengan perangkat modern untuk mendukung pembelajaran digital',
            'image' => 'computer-lab.jpg',
            'category' => 'Fasilitas',
            'is_featured' => true,
        ]);

        Gallery::create([
            'title' => 'Kegiatan Olahraga',
            'description' => 'Siswa-siswi mengikuti kegiatan olahraga untuk menjaga kesehatan dan kebugaran',
            'image' => 'sport-activity.jpg',
            'category' => 'Ekstrakurikuler',
            'is_featured' => true,
        ]);

        Gallery::create([
            'title' => 'Perpustakaan Sekolah',
            'description' => 'Perpustakaan dengan koleksi buku yang lengkap dan suasana yang nyaman untuk membaca',
            'image' => 'library.jpg',
            'category' => 'Fasilitas',
            'is_featured' => true,
        ]);

        Gallery::create([
            'title' => 'Kegiatan Seni dan Budaya',
            'description' => 'Pentas seni siswa dalam acara perpisahan kelas 6',
            'image' => 'art-performance.jpg',
            'category' => 'Kegiatan',
            'is_featured' => true,
        ]);

        Gallery::create([
            'title' => 'Musholla Sekolah',
            'description' => 'Musholla yang nyaman untuk kegiatan ibadah dan pembelajaran agama',
            'image' => 'musholla.jpg',
            'category' => 'Fasilitas',
            'is_featured' => true,
        ]);

        // Create Academic Programs
        AcademicProgram::create([
            'name' => 'Program Tahfidz Al-Quran',
            'description' => 'Program unggulan untuk menghafal Al-Quran dengan metode yang sistematis dan menyenangkan.',
            'grade_level' => 'Kelas 1-6',
            'curriculum' => 'Kurikulum Tahfidz dengan target hafalan 5 Juz untuk lulusan kelas 6',
            'objectives' => 'Membentuk siswa yang hafal Al-Quran, berakhlak mulia, dan mencintai kitab suci',
            'duration' => '6 tahun',
            'is_active' => true,
            'sort_order' => 1,
        ]);

        AcademicProgram::create([
            'name' => 'Program Bilingual (Bahasa Arab & Inggris)',
            'description' => 'Program pembelajaran dwi bahasa untuk mempersiapkan siswa menghadapi tantangan global.',
            'grade_level' => 'Kelas 3-6',
            'curriculum' => 'Kurikulum terintegrasi dengan penguatan bahasa Arab dan Inggris',
            'objectives' => 'Siswa mampu berkomunikasi dalam bahasa Arab dan Inggris dengan baik',
            'duration' => '4 tahun',
            'is_active' => true,
            'sort_order' => 2,
        ]);

        AcademicProgram::create([
            'name' => 'Program STEM (Science, Technology, Engineering, Mathematics)',
            'description' => 'Program untuk mengembangkan kemampuan sains dan teknologi sejak dini.',
            'grade_level' => 'Kelas 4-6',
            'curriculum' => 'Kurikulum STEM dengan pendekatan praktis dan eksperimen',
            'objectives' => 'Mengembangkan kemampuan berpikir kritis dan problem solving',
            'duration' => '3 tahun',
            'is_active' => true,
            'sort_order' => 3,
        ]);

        AcademicProgram::create([
            'name' => 'Program Kewirausahaan (Entrepreneurship)',
            'description' => 'Program untuk menanamkan jiwa kewirausahaan dan kemandirian pada siswa.',
            'grade_level' => 'Kelas 5-6',
            'curriculum' => 'Pembelajaran praktis tentang dasar-dasar kewirausahaan',
            'objectives' => 'Menumbuhkan jiwa wirausaha dan kemandirian sejak dini',
            'duration' => '2 tahun',
            'is_active' => true,
            'sort_order' => 4,
        ]);

        AcademicProgram::create([
            'name' => 'Program Karakter Islami',
            'description' => 'Program pembentukan karakter berdasarkan nilai-nilai Islam yang universal.',
            'grade_level' => 'Kelas 1-6',
            'curriculum' => 'Integrasi nilai-nilai Islam dalam seluruh aktivitas pembelajaran',
            'objectives' => 'Membentuk karakter siswa yang berakhlak mulia dan bertaqwa',
            'duration' => '6 tahun',
            'is_active' => true,
            'sort_order' => 5,
        ]);

        // Create sample students and grades
        $student1 = Student::create([
            'nis' => '2024001',
            'nisn' => '1234567890',
            'name' => 'Ahmad Maulana',
            'class' => '5A',
            'birth_date' => '2013-05-15',
            'birth_place' => 'Malang',
            'gender' => 'L',
            'address' => 'Jl. Soekarno Hatta No. 123, Malang',
            'parent_name' => 'Budi Santoso',
            'parent_phone' => '081234567890',
            'parent_email' => 'budi@email.com',
            'is_active' => true,
        ]);

        $student2 = Student::create([
            'nis' => '2024002',
            'nisn' => '1234567891',
            'name' => 'Siti Aisyah',
            'class' => '5A',
            'birth_date' => '2013-08-20',
            'birth_place' => 'Malang',
            'gender' => 'P',
            'address' => 'Jl. Veteran No. 456, Malang',
            'parent_name' => 'Hasan Ali',
            'parent_phone' => '081234567891',
            'parent_email' => 'hasan@email.com',
            'is_active' => true,
        ]);

        // Create sample grades
        $subjects = ['Matematika', 'Bahasa Indonesia', 'IPA', 'IPS', 'Bahasa Inggris', 'Pendidikan Agama Islam', 'Tahfidz'];
        
        foreach ([$student1, $student2] as $student) {
            foreach ($subjects as $subject) {
                Grade::create([
                    'student_id' => $student->id,
                    'subject' => $subject,
                    'semester' => 'Ganjil',
                    'academic_year' => '2024/2025',
                    'daily_score_1' => random_int(75, 95),
                    'daily_score_2' => random_int(75, 95),
                    'daily_score_3' => random_int(75, 95),
                    'midterm_score' => random_int(75, 95),
                    'final_score' => random_int(75, 95),
                    'average_score' => random_int(75, 95),
                    'grade' => 'B+',
                ]);
            }
        }
    }
}