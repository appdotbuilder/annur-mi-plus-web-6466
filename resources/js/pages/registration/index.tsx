import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function RegistrationIndex() {
    const { data, setData, post, processing, errors } = useForm({
        student_name: '',
        nisn: '',
        birth_date: '',
        birth_place: '',
        gender: '',
        address: '',
        father_name: '',
        mother_name: '',
        father_occupation: '',
        mother_occupation: '',
        parent_phone: '',
        parent_email: '',
        previous_school: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/pendaftaran');
    };

    return (
        <>
            <Head title="Pendaftaran Siswa Baru - MI Plus ANNur" />
            
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
                            📝 Pendaftaran Siswa Baru
                        </h1>
                        <p className="text-xl text-green-700 max-w-3xl mx-auto">
                            Bergabunglah dengan keluarga besar MI Plus ANNur dan wujudkan masa depan cerah 
                            untuk putra-putri Anda dengan pendidikan Islam yang berkualitas.
                        </p>
                    </div>

                    {/* Registration Benefits */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <Card className="border-green-100 shadow-lg">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                                    🌟 Keunggulan MI Plus ANNur
                                </h2>
                                
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">📚</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Kurikulum Terintegrasi</h3>
                                        <p className="text-sm text-gray-600">
                                            Menggabungkan kurikulum nasional dengan nilai-nilai Islam
                                        </p>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">👨‍🏫</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Guru Berkualitas</h3>
                                        <p className="text-sm text-gray-600">
                                            Tim pengajar berpengalaman dan berdedikasi tinggi
                                        </p>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-4xl mb-3">🏢</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Fasilitas Lengkap</h3>
                                        <p className="text-sm text-gray-600">
                                            Gedung modern dengan fasilitas pembelajaran terdepan
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Registration Form */}
                    <div className="max-w-4xl mx-auto">
                        <Card className="border-green-100 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-3xl text-green-800 text-center">
                                    📋 Formulir Pendaftaran
                                </CardTitle>
                                <p className="text-center text-green-600 mt-2">
                                    Lengkapi data berikut dengan benar dan lengkap
                                </p>
                            </CardHeader>
                            <CardContent className="p-8">
                                <form onSubmit={submit} className="space-y-8">
                                    {/* Student Information */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
                                            <span className="text-2xl mr-3">👤</span>
                                            Data Siswa
                                        </h3>
                                        
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="student_name" className="text-green-700">Nama Lengkap Siswa *</Label>
                                                <Input
                                                    id="student_name"
                                                    type="text"
                                                    value={data.student_name}
                                                    onChange={(e) => setData('student_name', e.target.value)}
                                                    className="border-green-200 focus:border-green-500"
                                                    placeholder="Nama lengkap sesuai akta kelahiran"
                                                    required
                                                />
                                                {errors.student_name && <p className="text-red-500 text-sm mt-1">{errors.student_name}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="nisn" className="text-green-700">NISN</Label>
                                                <Input
                                                    id="nisn"
                                                    type="text"
                                                    value={data.nisn}
                                                    onChange={(e) => setData('nisn', e.target.value)}
                                                    className="border-green-200 focus:border-green-500"
                                                    placeholder="Nomor Induk Siswa Nasional"
                                                />
                                                {errors.nisn && <p className="text-red-500 text-sm mt-1">{errors.nisn}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="birth_place" className="text-green-700">Tempat Lahir *</Label>
                                                <Input
                                                    id="birth_place"
                                                    type="text"
                                                    value={data.birth_place}
                                                    onChange={(e) => setData('birth_place', e.target.value)}
                                                    className="border-green-200 focus:border-green-500"
                                                    placeholder="Kota tempat lahir"
                                                    required
                                                />
                                                {errors.birth_place && <p className="text-red-500 text-sm mt-1">{errors.birth_place}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="birth_date" className="text-green-700">Tanggal Lahir *</Label>
                                                <Input
                                                    id="birth_date"
                                                    type="date"
                                                    value={data.birth_date}
                                                    onChange={(e) => setData('birth_date', e.target.value)}
                                                    className="border-green-200 focus:border-green-500"
                                                    required
                                                />
                                                {errors.birth_date && <p className="text-red-500 text-sm mt-1">{errors.birth_date}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="gender" className="text-green-700">Jenis Kelamin *</Label>
                                                <Select value={data.gender} onValueChange={(value) => setData('gender', value)}>
                                                    <SelectTrigger className="border-green-200 focus:border-green-500">
                                                        <SelectValue placeholder="Pilih jenis kelamin" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="L">Laki-laki</SelectItem>
                                                        <SelectItem value="P">Perempuan</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="previous_school" className="text-green-700">Sekolah Asal</Label>
                                                <Input
                                                    id="previous_school"
                                                    type="text"
                                                    value={data.previous_school}
                                                    onChange={(e) => setData('previous_school', e.target.value)}
                                                    className="border-green-200 focus:border-green-500"
                                                    placeholder="Nama sekolah sebelumnya (jika ada)"
                                                />
                                                {errors.previous_school && <p className="text-red-500 text-sm mt-1">{errors.previous_school}</p>}
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <Label htmlFor="address" className="text-green-700">Alamat Lengkap *</Label>
                                            <Textarea
                                                id="address"
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                                className="border-green-200 focus:border-green-500 min-h-[100px]"
                                                placeholder="Alamat lengkap siswa (RT/RW, Kelurahan, Kecamatan, Kota)"
                                                required
                                            />
                                            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                                        </div>
                                    </div>

                                    {/* Parent Information */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
                                            <span className="text-2xl mr-3">👪</span>
                                            Data Orang Tua / Wali
                                        </h3>
                                        
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="father_name" className="text-green-700">Nama Ayah *</Label>
                                                <Input
                                                    id="father_name"
                                                    type="text"
                                                    value={data.father_name}
                                                    onChange={(e) => setData('father_name', e.target.value)}
                                                    className="border-green-200 focus:border-green-500"
                                                    placeholder="Nama lengkap ayah"
                                                    required
                                                />
                                                {errors.father_name && <p className="text-red-500 text-sm mt-1">{errors.father_name}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="mother_name" className="text-green-700">Nama Ibu *</Label>
                                                <Input
                                                    id="mother_name"
                                                    type="text"
                                                    value={data.mother_name}
                                                    onChange={(e) => setData('mother_name', e.target.value)}
                                                    className="border-green-200 focus:border-green-500"
                                                    placeholder="Nama lengkap ibu"
                                                    required
                                                />
                                                {errors.mother_name && <p className="text-red-500 text-sm mt-1">{errors.mother_name}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="father_occupation" className="text-green-700">Pekerjaan Ayah *</Label>
                                                <Input
                                                    id="father_occupation"
                                                    type="text"
                                                    value={data.father_occupation}
                                                    onChange={(e) => setData('father_occupation', e.target.value)}
                                                    className="border-green-200 focus:border-green-500"
                                                    placeholder="Pekerjaan ayah"
                                                    required
                                                />
                                                {errors.father_occupation && <p className="text-red-500 text-sm mt-1">{errors.father_occupation}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="mother_occupation" className="text-green-700">Pekerjaan Ibu *</Label>
                                                <Input
                                                    id="mother_occupation"
                                                    type="text"
                                                    value={data.mother_occupation}
                                                    onChange={(e) => setData('mother_occupation', e.target.value)}
                                                    className="border-green-200 focus:border-green-500"
                                                    placeholder="Pekerjaan ibu"
                                                    required
                                                />
                                                {errors.mother_occupation && <p className="text-red-500 text-sm mt-1">{errors.mother_occupation}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="parent_phone" className="text-green-700">Nomor Telepon *</Label>
                                                <Input
                                                    id="parent_phone"
                                                    type="tel"
                                                    value={data.parent_phone}
                                                    onChange={(e) => setData('parent_phone', e.target.value)}
                                                    className="border-green-200 focus:border-green-500"
                                                    placeholder="08xx-xxxx-xxxx"
                                                    required
                                                />
                                                {errors.parent_phone && <p className="text-red-500 text-sm mt-1">{errors.parent_phone}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="parent_email" className="text-green-700">Email Orang Tua</Label>
                                                <Input
                                                    id="parent_email"
                                                    type="email"
                                                    value={data.parent_email}
                                                    onChange={(e) => setData('parent_email', e.target.value)}
                                                    className="border-green-200 focus:border-green-500"
                                                    placeholder="email@contoh.com"
                                                />
                                                {errors.parent_email && <p className="text-red-500 text-sm mt-1">{errors.parent_email}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Terms and Conditions */}
                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                                            <span className="text-xl mr-2">📋</span>
                                            Ketentuan Pendaftaran
                                        </h4>
                                        <ul className="text-sm text-green-700 space-y-2">
                                            <li>✅ Data yang diisi harus benar dan dapat dipertanggungjawabkan</li>
                                            <li>✅ Menyiapkan dokumen pendukung (fotokopi akta kelahiran, kartu keluarga, dll)</li>
                                            <li>✅ Mengikuti prosedur seleksi yang ditetapkan sekolah</li>
                                            <li>✅ Membayar biaya pendaftaran sesuai ketentuan</li>
                                        </ul>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center">
                                        <Button 
                                            type="submit" 
                                            disabled={processing}
                                            className="bg-green-600 hover:bg-green-700 text-lg px-12 py-4"
                                        >
                                            {processing ? '📤 Memproses Pendaftaran...' : '📝 Daftar Sekarang'}
                                        </Button>
                                        
                                        <p className="text-sm text-gray-600 mt-4">
                                            Dengan mendaftar, Anda menyetujui syarat dan ketentuan yang berlaku
                                        </p>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Next Steps Info */}
                    <div className="max-w-4xl mx-auto mt-12">
                        <Card className="border-green-100 shadow-lg">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                                    🚀 Langkah Selanjutnya
                                </h2>
                                
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-4xl mb-3">1️⃣</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Verifikasi Data</h3>
                                        <p className="text-sm text-gray-600">
                                            Sekolah akan memverifikasi data dan menghubungi Anda dalam 1x24 jam
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <div className="text-4xl mb-3">2️⃣</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Seleksi</h3>
                                        <p className="text-sm text-gray-600">
                                            Mengikuti tes seleksi dan wawancara sesuai jadwal yang ditentukan
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <div className="text-4xl mb-3">3️⃣</div>
                                        <h3 className="font-semibold text-green-700 mb-2">Pengumuman</h3>
                                        <p className="text-sm text-gray-600">
                                            Hasil seleksi akan diumumkan dan daftar ulang bagi yang diterima
                                        </p>
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