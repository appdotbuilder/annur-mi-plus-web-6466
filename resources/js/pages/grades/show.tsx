import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Student {
    id: number;
    nis: string;
    name: string;
    class: string;
    birth_date: string;
}

interface Grade {
    id: number;
    subject: string;
    semester: string;
    academic_year: string;
    daily_score_1?: number;
    daily_score_2?: number;
    daily_score_3?: number;
    midterm_score?: number;
    final_score?: number;
    average_score?: number;
    grade?: string;
    notes?: string;
}

interface Props {
    student: Student;
    grades: {
        [academicYear: string]: {
            [semester: string]: Grade[];
        };
    };
    [key: string]: unknown;
}

export default function GradesShow({ student, grades }: Props) {
    const getGradeColor = (score?: number) => {
        if (!score) return 'text-gray-400';
        if (score >= 90) return 'text-green-600';
        if (score >= 80) return 'text-blue-600';
        if (score >= 70) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getGradeBadgeVariant = (score?: number) => {
        if (!score) return 'secondary';
        if (score >= 90) return 'default';
        if (score >= 80) return 'secondary';
        if (score >= 70) return 'outline';
        return 'destructive';
    };

    return (
        <>
            <Head title={`Nilai ${student.name} - MI Plus ANNur`} />
            
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
                {/* Header */}
                <header className="bg-white/90 backdrop-blur-md shadow-lg">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex items-center justify-between">
                            <Link href="/" className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">🕌</span>
                                </div>
                                <span className="text-xl font-bold text-green-800">MI Plus ANNur</span>
                            </Link>
                            
                            <div className="flex space-x-2">
                                <Link href="/portal-nilai">
                                    <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                                        ← Portal Nilai
                                    </Button>
                                </Link>
                                <Link href="/">
                                    <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                                        🏠 Beranda
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>

                <div className="container mx-auto px-4 py-8">
                    {/* Student Info */}
                    <Card className="border-green-100 shadow-xl mb-8">
                        <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
                            <CardTitle className="text-2xl flex items-center">
                                <span className="text-3xl mr-3">🎓</span>
                                Laporan Nilai Siswa
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div>
                                    <p className="text-sm text-green-600 font-semibold">Nama Siswa</p>
                                    <p className="text-lg font-bold text-green-800">{student.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-green-600 font-semibold">NIS</p>
                                    <p className="text-lg font-bold text-green-800">{student.nis}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-green-600 font-semibold">Kelas</p>
                                    <p className="text-lg font-bold text-green-800">{student.class}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-green-600 font-semibold">Tanggal Lahir</p>
                                    <p className="text-lg font-bold text-green-800">
                                        {new Date(student.birth_date).toLocaleDateString('id-ID')}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Grades by Academic Year and Semester */}
                    {Object.entries(grades).map(([academicYear, semesters]) => (
                        <div key={academicYear} className="mb-8">
                            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                                <span className="text-3xl mr-3">📅</span>
                                Tahun Ajaran {academicYear}
                            </h2>
                            
                            {Object.entries(semesters).map(([semester, subjectGrades]) => (
                                <Card key={semester} className="border-green-100 shadow-lg mb-6">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-green-800 flex items-center">
                                            <span className="text-2xl mr-3">📊</span>
                                            Semester {semester}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead>
                                                    <tr className="border-b border-green-200">
                                                        <th className="text-left py-3 px-2 font-semibold text-green-800">Mata Pelajaran</th>
                                                        <th className="text-center py-3 px-2 font-semibold text-green-800">Harian 1</th>
                                                        <th className="text-center py-3 px-2 font-semibold text-green-800">Harian 2</th>
                                                        <th className="text-center py-3 px-2 font-semibold text-green-800">Harian 3</th>
                                                        <th className="text-center py-3 px-2 font-semibold text-green-800">UTS</th>
                                                        <th className="text-center py-3 px-2 font-semibold text-green-800">UAS</th>
                                                        <th className="text-center py-3 px-2 font-semibold text-green-800">Rata-rata</th>
                                                        <th className="text-center py-3 px-2 font-semibold text-green-800">Nilai Huruf</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {subjectGrades.map((grade) => (
                                                        <tr key={grade.id} className="border-b border-green-100 hover:bg-green-50">
                                                            <td className="py-4 px-2 font-semibold text-green-800">{grade.subject}</td>
                                                            <td className={`text-center py-4 px-2 font-bold ${getGradeColor(grade.daily_score_1)}`}>
                                                                {grade.daily_score_1 || '-'}
                                                            </td>
                                                            <td className={`text-center py-4 px-2 font-bold ${getGradeColor(grade.daily_score_2)}`}>
                                                                {grade.daily_score_2 || '-'}
                                                            </td>
                                                            <td className={`text-center py-4 px-2 font-bold ${getGradeColor(grade.daily_score_3)}`}>
                                                                {grade.daily_score_3 || '-'}
                                                            </td>
                                                            <td className={`text-center py-4 px-2 font-bold ${getGradeColor(grade.midterm_score)}`}>
                                                                {grade.midterm_score || '-'}
                                                            </td>
                                                            <td className={`text-center py-4 px-2 font-bold ${getGradeColor(grade.final_score)}`}>
                                                                {grade.final_score || '-'}
                                                            </td>
                                                            <td className={`text-center py-4 px-2 font-bold ${getGradeColor(grade.average_score)}`}>
                                                                {grade.average_score || '-'}
                                                            </td>
                                                            <td className="text-center py-4 px-2">
                                                                {grade.grade && (
                                                                    <Badge variant={getGradeBadgeVariant(grade.average_score)}>
                                                                        {grade.grade}
                                                                    </Badge>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Summary Statistics */}
                                        <div className="mt-6 grid md:grid-cols-3 gap-4">
                                            <Card className="border-green-200 bg-green-50">
                                                <CardContent className="p-4 text-center">
                                                    <div className="text-2xl mb-2">📈</div>
                                                    <p className="text-sm text-green-600 font-semibold">Rata-rata Keseluruhan</p>
                                                    <p className="text-xl font-bold text-green-800">
                                                        {subjectGrades.length > 0 
                                                            ? Math.round(
                                                                subjectGrades
                                                                    .filter(g => g.average_score)
                                                                    .reduce((sum, g) => sum + (g.average_score || 0), 0) / 
                                                                subjectGrades.filter(g => g.average_score).length
                                                            )
                                                            : '-'
                                                        }
                                                    </p>
                                                </CardContent>
                                            </Card>

                                            <Card className="border-blue-200 bg-blue-50">
                                                <CardContent className="p-4 text-center">
                                                    <div className="text-2xl mb-2">🏆</div>
                                                    <p className="text-sm text-blue-600 font-semibold">Nilai Tertinggi</p>
                                                    <p className="text-xl font-bold text-blue-800">
                                                        {subjectGrades.length > 0 
                                                            ? Math.max(...subjectGrades
                                                                .filter(g => g.average_score)
                                                                .map(g => g.average_score || 0)
                                                            )
                                                            : '-'
                                                        }
                                                    </p>
                                                </CardContent>
                                            </Card>

                                            <Card className="border-yellow-200 bg-yellow-50">
                                                <CardContent className="p-4 text-center">
                                                    <div className="text-2xl mb-2">📚</div>
                                                    <p className="text-sm text-yellow-600 font-semibold">Total Mata Pelajaran</p>
                                                    <p className="text-xl font-bold text-yellow-800">
                                                        {subjectGrades.length} mapel
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ))}

                    {/* No Data Message */}
                    {Object.keys(grades).length === 0 && (
                        <Card className="border-green-100 shadow-lg">
                            <CardContent className="p-12 text-center">
                                <div className="text-6xl mb-4">📊</div>
                                <h3 className="text-2xl font-bold text-green-800 mb-4">
                                    Belum Ada Data Nilai
                                </h3>
                                <p className="text-green-600 mb-8">
                                    Data nilai untuk siswa ini belum tersedia. 
                                    Silakan hubungi guru kelas atau bagian administrasi.
                                </p>
                                <Link href="/kontak">
                                    <Button className="bg-green-600 hover:bg-green-700">
                                        📞 Hubungi Sekolah
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    )}

                    {/* Grade Legend */}
                    <Card className="border-green-100 shadow-lg mt-8">
                        <CardHeader>
                            <CardTitle className="text-xl text-green-800 flex items-center">
                                <span className="text-2xl mr-3">📋</span>
                                Keterangan Nilai
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-green-700 mb-3">Rentang Nilai:</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center">
                                            <Badge className="mr-2 bg-green-600">A</Badge>
                                            <span>90 - 100 (Sangat Baik)</span>
                                        </li>
                                        <li className="flex items-center">
                                            <Badge variant="secondary" className="mr-2">B</Badge>
                                            <span>80 - 89 (Baik)</span>
                                        </li>
                                        <li className="flex items-center">
                                            <Badge variant="outline" className="mr-2">C</Badge>
                                            <span>70 - 79 (Cukup)</span>
                                        </li>
                                        <li className="flex items-center">
                                            <Badge variant="destructive" className="mr-2">D</Badge>
                                            <span>&lt; 70 (Perlu Perbaikan)</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-green-700 mb-3">Komponen Penilaian:</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• <strong>Harian:</strong> Ulangan harian dan tugas</li>
                                        <li>• <strong>UTS:</strong> Ujian Tengah Semester</li>
                                        <li>• <strong>UAS:</strong> Ujian Akhir Semester</li>
                                        <li>• <strong>Rata-rata:</strong> Nilai akhir semester</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Print Button */}
                    <div className="text-center mt-8">
                        <Button 
                            onClick={() => window.print()}
                            className="bg-green-600 hover:bg-green-700 mr-4"
                        >
                            🖨️ Cetak Rapor
                        </Button>
                        <Link href="/portal-nilai">
                            <Button variant="outline" className="border-green-600 text-green-600">
                                🔍 Cari Siswa Lain
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-green-800 text-white py-8 mt-16">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-green-200">
                            © 2024 MI Plus ANNur. Semua hak cipta dilindungi.
                        </p>
                    </div>
                </footer>
            </div>

            <style>{`
                @media print {
                    header, footer, button {
                        display: none !important;
                    }
                    .container {
                        max-width: none !important;
                        padding: 0 !important;
                    }
                }
            `}</style>
        </>
    );
}