import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactIndex() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        
        post('/kontak', {
            onSuccess: () => {
                reset();
            }
        });
    };

    return (
        <>
            <Head title="Hubungi Kami - MI Plus ANNur" />
            
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
                            📞 Hubungi Kami
                        </h1>
                        <p className="text-xl text-green-700 max-w-2xl mx-auto">
                            Ada pertanyaan atau ingin berkonsultasi tentang pendidikan anak Anda? 
                            Kami siap membantu!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <Card className="border-green-100 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl text-green-800 flex items-center">
                                    <span className="text-3xl mr-3">📝</span>
                                    Kirim Pesan
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={submit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="name" className="text-green-700">Nama Lengkap *</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className="border-green-200 focus:border-green-500"
                                                placeholder="Masukkan nama lengkap"
                                                required
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <Label htmlFor="email" className="text-green-700">Email *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className="border-green-200 focus:border-green-500"
                                                placeholder="contoh@email.com"
                                                required
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="phone" className="text-green-700">Nomor Telepon</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="border-green-200 focus:border-green-500"
                                            placeholder="08xx-xxxx-xxxx"
                                        />
                                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="subject" className="text-green-700">Subjek *</Label>
                                        <Input
                                            id="subject"
                                            type="text"
                                            value={data.subject}
                                            onChange={(e) => setData('subject', e.target.value)}
                                            className="border-green-200 focus:border-green-500"
                                            placeholder="Subjek pesan Anda"
                                            required
                                        />
                                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="message" className="text-green-700">Pesan *</Label>
                                        <Textarea
                                            id="message"
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className="border-green-200 focus:border-green-500 min-h-[120px]"
                                            placeholder="Tulis pesan Anda di sini..."
                                            required
                                        />
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>

                                    <Button 
                                        type="submit" 
                                        disabled={processing}
                                        className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                                    >
                                        {processing ? '📤 Mengirim...' : '📤 Kirim Pesan'}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            {/* Main Contact Info */}
                            <Card className="border-green-100 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-green-800 flex items-center">
                                        <span className="text-3xl mr-3">📍</span>
                                        Informasi Kontak
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <span className="text-2xl">🏫</span>
                                        <div>
                                            <h3 className="font-semibold text-green-800 mb-1">Alamat Sekolah</h3>
                                            <p className="text-gray-600">
                                                Jl. Pendidikan No. 123<br />
                                                Kelurahan Lowokwaru<br />
                                                Kota Malang, Jawa Timur 65141
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <span className="text-2xl">📞</span>
                                        <div>
                                            <h3 className="font-semibold text-green-800 mb-1">Telepon</h3>
                                            <p className="text-gray-600">(0341) 123-4567</p>
                                            <p className="text-gray-600">WhatsApp: +62 812-3456-7890</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <span className="text-2xl">✉️</span>
                                        <div>
                                            <h3 className="font-semibold text-green-800 mb-1">Email</h3>
                                            <p className="text-gray-600">info@miplusannur.sch.id</p>
                                            <p className="text-gray-600">admin@miplusannur.sch.id</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <span className="text-2xl">🌐</span>
                                        <div>
                                            <h3 className="font-semibold text-green-800 mb-1">Media Sosial</h3>
                                            <div className="space-y-1">
                                                <p className="text-gray-600">📘 Facebook: MI Plus ANNur</p>
                                                <p className="text-gray-600">📸 Instagram: @miplusannur</p>
                                                <p className="text-gray-600">📺 YouTube: MI Plus ANNur</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Office Hours */}
                            <Card className="border-green-100 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-green-800 flex items-center">
                                        <span className="text-3xl mr-3">⏰</span>
                                        Jam Operasional
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center py-2 border-b border-green-100">
                                            <span className="font-semibold text-green-800">Senin - Jumat</span>
                                            <span className="text-gray-600">07:00 - 15:30 WIB</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-green-100">
                                            <span className="font-semibold text-green-800">Sabtu</span>
                                            <span className="text-gray-600">07:00 - 12:00 WIB</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="font-semibold text-green-800">Minggu & Libur</span>
                                            <span className="text-red-600 font-semibold">Tutup</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                                        <p className="text-sm text-green-700">
                                            💡 <strong>Tips:</strong> Untuk kunjungan atau konsultasi, 
                                            sebaiknya hubungi terlebih dahulu untuk membuat janji temu.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Map Placeholder */}
                            <Card className="border-green-100 shadow-xl">
                                <CardContent className="p-6">
                                    <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg flex items-center justify-center">
                                        <div className="text-center">
                                            <span className="text-4xl mb-2 block">🗺️</span>
                                            <p className="text-green-700 font-semibold">Peta Lokasi</p>
                                            <p className="text-sm text-green-600">MI Plus ANNur</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="max-w-4xl mx-auto mt-16">
                        <Card className="border-green-100 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-3xl text-green-800 text-center">
                                    ❓ Pertanyaan yang Sering Diajukan
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold text-green-800 mb-2">
                                                📝 Bagaimana cara mendaftar siswa baru?
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Anda dapat mendaftar secara online melalui halaman pendaftaran 
                                                atau datang langsung ke sekolah dengan membawa persyaratan lengkap.
                                            </p>
                                        </div>
                                        
                                        <div>
                                            <h3 className="font-semibold text-green-800 mb-2">
                                                💰 Berapa biaya sekolah di MI Plus ANNur?
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Untuk informasi biaya pendidikan, silakan hubungi kami langsung 
                                                atau datang ke sekolah untuk konsultasi.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold text-green-800 mb-2">
                                                🚌 Apakah tersedia transportasi sekolah?
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Ya, kami menyediakan layanan antar-jemput untuk area-area tertentu. 
                                                Hubungi kami untuk informasi rute dan biaya.
                                            </p>
                                        </div>
                                        
                                        <div>
                                            <h3 className="font-semibold text-green-800 mb-2">
                                                🍽️ Bagaimana dengan program makan siang?
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Kami menyediakan program catering sehat dan bergizi 
                                                dengan menu yang bervariasi setiap harinya.
                                            </p>
                                        </div>
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
        </>
    );
}