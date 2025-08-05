import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function GradesIndex() {
    const { data, setData, post, processing, errors } = useForm({
        nis: '',
        name: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/portal-nilai');
    };

    return (
        <>
            <Head title="Portal Nilai Siswa - MI Plus ANNur" />
            
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
                            📊 Portal Nilai Siswa
                        </h1>
                        <p className="text-xl text-green-700 max-w-2xl mx-auto">
                            Pantau perkembangan akademik putra-putri Anda secara real-time 
                            dengan sistem nilai online yang terintegrasi.
                        </p>
                    </div>

                    {/* Features Info */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <Card className="border-green-100 shadow-lg">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                                    🌟 Fitur Portal Nilai
                                </h2>
                                
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">📈</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Nilai Real-time</h3>
                                        <p className="text-sm text-gray-600">
                                            Akses nilai harian, UTS, dan UAS secara langsung
                                        </p>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">📋</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Laporan Lengkap</h3>
                                        <p className="text-sm text-gray-600">
                                            Laporan perkembangan akademik per semester
                                        </p>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">📱</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Akses Mobile</h3>
                                        <p className="text-sm text-gray-600">
                                            Dapat diakses kapan saja melalui perangkat mobile
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Login Form */}
                    <div className="max-w-md mx-auto">
                        <Card className="border-green-100 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl text-green-800 text-center">
                                    🔐 Masuk Portal Nilai
                                </CardTitle>
                                <p className="text-center text-green-600 mt-2">
                                    Masukkan data siswa untuk melihat nilai
                                </p>
                            </CardHeader>
                            <CardContent className="p-8">
                                <form onSubmit={submit} className="space-y-6">
                                    <div>
                                        <Label htmlFor="nis" className="text-green-700">Nomor Induk Siswa (NIS) *</Label>
                                        <Input
                                            id="nis"
                                            type="text"
                                            value={data.nis}
                                            onChange={(e) => setData('nis', e.target.value)}
                                            className="border-green-200 focus:border-green-500"
                                            placeholder="Contoh: 2024001"
                                            required
                                        />
                                        {errors.nis && <p className="text-red-500 text-sm mt-1">{errors.nis}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="name" className="text-green-700">Nama Siswa *</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="border-green-200 focus:border-green-500"
                                            placeholder="Nama lengkap siswa"
                                            required
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                    </div>

                                    <Button 
                                        type="submit" 
                                        disabled={processing}
                                        className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                                    >
                                        {processing ? '🔍 Mencari Data...' : '🔍 Lihat Nilai'}
                                    </Button>
                                </form>
                                
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                                        <span className="text-lg mr-2">💡</span>
                                        Contoh Data Login
                                    </h4>
                                    <div className="text-sm text-blue-700 space-y-1">
                                        <p><strong>NIS:</strong> 2024001</p>
                                        <p><strong>Nama:</strong> Ahmad Maulana</p>
                                        <hr className="my-2 border-blue-200" />
                                        <p><strong>NIS:</strong> 2024002</p>
                                        <p><strong>Nama:</strong> Siti Aisyah</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Information Cards */}
                    <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
                        {/* For Parents */}
                        <Card className="border-green-100 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl text-green-800 flex items-center">
                                    <span className="text-2xl mr-3">👨‍👩‍👧‍👦</span>
                                    Untuk Orang Tua
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✅</span>
                                        Pantau perkembangan akademik anak secara real-time
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✅</span>
                                        Dapatkan laporan nilai harian, UTS, dan UAS
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✅</span>
                                        Lihat grafik perkembangan nilai per mata pelajaran
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✅</span>
                                        Akses mudah kapan saja dan dimana saja
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* For Students */}
                        <Card className="border-green-100 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl text-green-800 flex items-center">
                                    <span className="text-2xl mr-3">🎓</span>
                                    Untuk Siswa
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✅</span>
                                        Lihat nilai dan prestasi akademik terkini
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✅</span>
                                        Motivasi untuk terus meningkatkan prestasi
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✅</span>
                                        Identifikasi mata pelajaran yang perlu diperbaiki
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✅</span>
                                        Evaluasi diri secara berkelanjutan
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Support */}
                    <div className="max-w-2xl mx-auto mt-12">
                        <Card className="border-green-100 shadow-lg">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-xl font-bold text-green-800 mb-4">
                                    ❓ Butuh Bantuan?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Jika mengalami kesulitan mengakses portal nilai atau lupa data login, 
                                    silakan hubungi bagian administrasi sekolah.
                                </p>
                                <div className="space-y-2 text-sm text-green-700">
                                    <p className="flex items-center justify-center">
                                        <span className="mr-2">📞</span>
                                        Telepon: (0341) 123-4567
                                    </p>
                                    <p className="flex items-center justify-center">
                                        <span className="mr-2">📱</span>
                                        WhatsApp: +62 812-3456-7890
                                    </p>
                                    <p className="flex items-center justify-center">
                                        <span className="mr-2">⏰</span>
                                        Jam Layanan: 07:00 - 15:30 WIB
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <Link href="/kontak">
                                        <Button className="bg-green-600 hover:bg-green-700">
                                            📞 Hubungi Kami
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
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