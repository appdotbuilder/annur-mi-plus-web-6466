import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AcademicProgram {
    id: number;
    name: string;
    description: string;
    grade_level: string;
    curriculum?: string;
    objectives?: string;
    duration?: string;
    is_active: boolean;
    sort_order: number;
}

interface Props {
    programs: AcademicProgram[];
    [key: string]: unknown;
}

export default function ProgramsIndex({ programs }: Props) {
    return (
        <>
            <Head title="Program Akademik - MI Plus ANNur" />
            
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
                            
                            <Link href="/">
                                <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                                    ← Kembali ke Beranda
                                </Button>
                            </Link>
                        </nav>
                    </div>
                </header>

                <div className="container mx-auto px-4 py-12">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                            📚 Program Akademik
                        </h1>
                        <p className="text-xl text-green-700 max-w-3xl mx-auto">
                            Beragam program unggulan yang dirancang khusus untuk mengembangkan 
                            potensi akademik dan karakter siswa secara optimal dengan pendekatan Islam terpadu.
                        </p>
                    </div>

                    {/* Program Overview */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <Card className="border-green-100 shadow-xl">
                            <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
                                <CardTitle className="text-2xl text-center">
                                    🌟 Keunggulan Program Kami
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">🕌</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Islami Terpadu</h3>
                                        <p className="text-sm text-gray-600">
                                            Integrasi nilai-nilai Islam dalam setiap program pembelajaran
                                        </p>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">🎯</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Terstruktur</h3>
                                        <p className="text-sm text-gray-600">
                                            Program yang tersusun sistematis dan bertahap
                                        </p>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">👨‍🏫</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Tenaga Ahli</h3>
                                        <p className="text-sm text-gray-600">
                                            Dibimbing oleh guru-guru berpengalaman dan berkompeten
                                        </p>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">🏆</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Berprestasi</h3>
                                        <p className="text-sm text-gray-600">
                                            Terbukti menghasilkan siswa-siswa berprestasi
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Programs List */}
                    {programs.length > 0 ? (
                        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {programs.map((program, index) => (
                                <Card key={program.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <CardTitle className="text-xl text-green-800 mb-2 flex items-center">
                                                    <span className="text-2xl mr-3">
                                                        {index === 0 ? '📖' : index === 1 ? '🌍' : index === 2 ? '🔬' : index === 3 ? '💼' : '🤲'}
                                                    </span>
                                                    {program.name}
                                                </CardTitle>
                                                <Badge variant="outline" className="text-green-600 border-green-300">
                                                    {program.grade_level}
                                                </Badge>
                                            </div>
                                            {program.duration && (
                                                <Badge variant="secondary" className="ml-2">
                                                    ⏱️ {program.duration}
                                                </Badge>
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {program.description}
                                        </p>
                                        
                                        {program.objectives && (
                                            <div className="mb-4">
                                                <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                                                    <span className="text-lg mr-2">🎯</span>
                                                    Tujuan Program
                                                </h4>
                                                <p className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
                                                    {program.objectives}
                                                </p>
                                            </div>
                                        )}
                                        
                                        {program.curriculum && (
                                            <div className="mb-4">
                                                <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                                                    <span className="text-lg mr-2">📋</span>
                                                    Kurikulum
                                                </h4>
                                                <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                                                    {program.curriculum}
                                                </p>
                                            </div>
                                        )}
                                        
                                        <div className="text-center mt-6">
                                            <Link href={`/program-akademik/${program.id}`}>
                                                <Button className="bg-green-600 hover:bg-green-700">
                                                    📖 Lihat Detail Program
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📚</div>
                            <h2 className="text-2xl font-bold text-green-800 mb-4">Program Segera Hadir</h2>
                            <p className="text-green-600">
                                Program akademik sedang dalam tahap pengembangan dan akan segera tersedia.
                            </p>
                        </div>
                    )}

                    {/* Registration CTA */}
                    <div className="max-w-4xl mx-auto mt-16">
                        <Card className="border-green-100 shadow-xl bg-gradient-to-r from-green-600 to-emerald-700 text-white">
                            <CardContent className="p-8 text-center">
                                <h2 className="text-3xl font-bold mb-4">
                                    🚀 Bergabunglah dengan Program Unggulan Kami!
                                </h2>
                                <p className="text-green-100 mb-6 text-lg">
                                    Daftarkan putra-putri Anda sekarang dan berikan mereka kesempatan 
                                    untuk berkembang dengan program akademik terbaik.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link href="/pendaftaran">
                                        <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-8 py-4">
                                            📝 Daftar Sekarang
                                        </Button>
                                    </Link>
                                    <Link href="/kontak">
                                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-4">
                                            📞 Konsultasi
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mx-auto mt-16">
                        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
                            🤔 Mengapa Memilih MI Plus ANNur?
                        </h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="border-green-100 shadow-lg">
                                <CardContent className="p-6 text-center">
                                    <div className="text-4xl mb-4">📈</div>
                                    <h3 className="font-bold text-green-800 mb-3">Prestasi Akademik</h3>
                                    <p className="text-gray-600 text-sm">
                                        Siswa-siswa kami konsisten meraih prestasi dalam berbagai 
                                        kompetisi akademik tingkat regional dan nasional.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-green-100 shadow-lg">
                                <CardContent className="p-6 text-center">
                                    <div className="text-4xl mb-4">🤝</div>
                                    <h3 className="font-bold text-green-800 mb-3">Karakter Islami</h3>
                                    <p className="text-gray-600 text-sm">
                                        Pembentukan karakter berdasarkan nilai-nilai Islam yang 
                                        terintegrasi dalam setiap aspek pembelajaran.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-green-100 shadow-lg">
                                <CardContent className="p-6 text-center">
                                    <div className="text-4xl mb-4">🌐</div>
                                    <h3 className="font-bold text-green-800 mb-3">Wawasan Global</h3>
                                    <p className="text-gray-600 text-sm">
                                        Persiapan siswa menghadapi tantangan global dengan 
                                        tetap berpegang pada identitas dan nilai-nilai lokal.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
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
        </>
    );
}