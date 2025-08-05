import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface StudentRegistration {
    id: number;
    registration_number: string;
    student_name: string;
    birth_date: string;
    birth_place: string;
    gender: string;
    address: string;
    father_name: string;
    mother_name: string;
    parent_phone: string;
    parent_email?: string;
    status: string;
    created_at: string;
}

interface Props {
    registration: StudentRegistration;
    [key: string]: unknown;
}

export default function RegistrationSuccess({ registration }: Props) {
    return (
        <>
            <Head title="Pendaftaran Berhasil - MI Plus ANNur" />
            
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
                                    🏠 Beranda
                                </Button>
                            </Link>
                        </nav>
                    </div>
                </header>

                <div className="container mx-auto px-4 py-12">
                    {/* Success Message */}
                    <div className="max-w-4xl mx-auto">
                        <Card className="border-green-100 shadow-xl">
                            <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-700 text-white text-center">
                                <div className="text-6xl mb-4">🎉</div>
                                <CardTitle className="text-3xl">
                                    Selamat! Pendaftaran Berhasil
                                </CardTitle>
                                <p className="text-green-100 mt-2">
                                    Terima kasih telah mendaftarkan putra/putri Anda di MI Plus ANNur
                                </p>
                            </CardHeader>
                            <CardContent className="p-8">
                                {/* Registration Details */}
                                <div className="bg-green-50 rounded-xl p-6 mb-6">
                                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                        <span className="text-2xl mr-3">📋</span>
                                        Detail Pendaftaran
                                    </h3>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-sm text-green-600 font-semibold">Nomor Pendaftaran</p>
                                            <p className="text-2xl font-bold text-green-800 mb-4">{registration.registration_number}</p>
                                            
                                            <p className="text-sm text-green-600 font-semibold">Nama Calon Siswa</p>
                                            <p className="text-lg font-bold text-green-800 mb-4">{registration.student_name}</p>
                                            
                                            <p className="text-sm text-green-600 font-semibold">Jenis Kelamin</p>
                                            <p className="text-lg text-green-800 mb-4">
                                                {registration.gender === 'L' ? 'Laki-laki' : 'Perempuan'}
                                            </p>
                                        </div>
                                        
                                        <div>
                                            <p className="text-sm text-green-600 font-semibold">Tempat, Tanggal Lahir</p>
                                            <p className="text-lg text-green-800 mb-4">
                                                {registration.birth_place}, {new Date(registration.birth_date).toLocaleDateString('id-ID')}
                                            </p>
                                            
                                            <p className="text-sm text-green-600 font-semibold">Nama Orang Tua</p>
                                            <p className="text-lg text-green-800 mb-4">
                                                {registration.father_name} & {registration.mother_name}
                                            </p>
                                            
                                            <p className="text-sm text-green-600 font-semibold">Status Pendaftaran</p>
                                            <p className="text-lg font-bold text-yellow-600 mb-4">
                                                📋 {registration.status === 'pending' ? 'Menunggu Verifikasi' : registration.status}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Important Information */}
                                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                        <span className="text-2xl mr-3">📢</span>
                                        Informasi Penting
                                    </h3>
                                    
                                    <ul className="space-y-3 text-blue-700">
                                        <li className="flex items-start">
                                            <span className="text-lg mr-2">1️⃣</span>
                                            <div>
                                                <strong>Simpan Nomor Pendaftaran:</strong> Nomor pendaftaran 
                                                <span className="font-bold text-blue-800"> {registration.registration_number} </span>
                                                akan digunakan untuk melacak status pendaftaran Anda.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-lg mr-2">2️⃣</span>
                                            <div>
                                                <strong>Verifikasi Data:</strong> Tim kami akan memverifikasi data dan 
                                                menghubungi Anda melalui nomor telepon <strong>{registration.parent_phone}</strong> 
                                                dalam waktu 1x24 jam.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-lg mr-2">3️⃣</span>
                                            <div>
                                                <strong>Persiapkan Dokumen:</strong> Siapkan dokumen pendukung seperti 
                                                fotokopi akta kelahiran, kartu keluarga, dan foto 3x4.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-lg mr-2">4️⃣</span>
                                            <div>
                                                <strong>Jadwal Tes:</strong> Informasi jadwal tes seleksi akan 
                                                diberitahukan saat verifikasi data.
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Next Steps */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <Card className="border-green-200 bg-green-50">
                                        <CardContent className="p-6 text-center">
                                            <div className="text-4xl mb-3">📞</div>
                                            <h4 className="font-bold text-green-800 mb-2">Menunggu Kontak</h4>
                                            <p className="text-sm text-green-600">
                                                Tim kami akan menghubungi Anda untuk verifikasi data
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-yellow-200 bg-yellow-50">
                                        <CardContent className="p-6 text-center">
                                            <div className="text-4xl mb-3">📝</div>
                                            <h4 className="font-bold text-yellow-800 mb-2">Persiapan Dokumen</h4>
                                            <p className="text-sm text-yellow-600">
                                                Siapkan dokumen yang diperlukan untuk verifikasi
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-blue-200 bg-blue-50">
                                        <CardContent className="p-6 text-center">
                                            <div className="text-4xl mb-3">🎯</div>
                                            <h4 className="font-bold text-blue-800 mb-2">Tes Seleksi</h4>
                                            <p className="text-sm text-blue-600">
                                                Ikuti tes seleksi sesuai jadwal yang ditentukan
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Contact Information */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                        <span className="text-2xl mr-3">📞</span>
                                        Butuh Bantuan?
                                    </h3>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-sm text-gray-600 font-semibold">Telepon Sekolah</p>
                                            <p className="text-lg text-gray-800">(0341) 123-4567</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 font-semibold">WhatsApp</p>
                                            <p className="text-lg text-gray-800">+62 812-3456-7890</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 font-semibold">Email</p>
                                            <p className="text-lg text-gray-800">info@miplusannur.sch.id</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 font-semibold">Jam Layanan</p>
                                            <p className="text-lg text-gray-800">07:00 - 15:30 WIB</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="text-center space-y-4">
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Button 
                                            onClick={() => window.print()}
                                            className="bg-green-600 hover:bg-green-700"
                                        >
                                            🖨️ Cetak Bukti Pendaftaran
                                        </Button>
                                        
                                        <Link href={`/pendaftaran/${registration.registration_number}`}>
                                            <Button variant="outline" className="border-green-600 text-green-600">
                                                👁️ Lihat Detail Pendaftaran
                                            </Button>
                                        </Link>
                                    </div>
                                    
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Link href="/kontak">
                                            <Button variant="outline" className="border-blue-600 text-blue-600">
                                                📞 Hubungi Kami
                                            </Button>
                                        </Link>
                                        
                                        <Link href="/">
                                            <Button variant="outline" className="border-green-600 text-green-600">
                                                🏠 Kembali ke Beranda
                                            </Button>
                                        </Link>
                                    </div>
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