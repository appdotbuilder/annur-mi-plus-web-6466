import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface News {
    id: number;
    title: string;
    excerpt: string;
    published_at: string;
    image?: string;
}

interface Announcement {
    id: number;
    title: string;
    content: string;
    event_date?: string;
    event_time?: string;
    location?: string;
    is_urgent: boolean;
}

interface Gallery {
    id: number;
    title: string;
    description?: string;
    image: string;
    category?: string;
}

interface Stats {
    teachers: number;
    news: number;
}

interface Props {
    latestNews: News[];
    urgentAnnouncements: Announcement[];
    recentAnnouncements: Announcement[];
    featuredGallery: Gallery[];
    stats: Stats;
    [key: string]: unknown;
}

export default function Welcome({ 
    latestNews, 
    urgentAnnouncements, 
    recentAnnouncements, 
    featuredGallery, 
    stats 
}: Props) {
    return (
        <>
            <Head title="MI Plus ANNur - Sekolah Islam Terpadu" />
            
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
                {/* Header Navigation */}
                <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">🕌</span>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-green-800">MI Plus ANNur</h1>
                                    <p className="text-sm text-green-600">Sekolah Islam Terpadu</p>
                                </div>
                            </div>
                            
                            <div className="hidden md:flex space-x-6">
                                <Link href="/berita" className="text-gray-700 hover:text-green-600 transition-colors">
                                    📰 Berita
                                </Link>
                                <Link href="/pengumuman" className="text-gray-700 hover:text-green-600 transition-colors">
                                    📢 Pengumuman
                                </Link>
                                <Link href="/guru" className="text-gray-700 hover:text-green-600 transition-colors">
                                    👨‍🏫 Guru
                                </Link>
                                <Link href="/program-akademik" className="text-gray-700 hover:text-green-600 transition-colors">
                                    📚 Program
                                </Link>
                                <Link href="/galeri" className="text-gray-700 hover:text-green-600 transition-colors">
                                    🖼️ Galeri
                                </Link>
                                <Link href="/kontak" className="text-gray-700 hover:text-green-600 transition-colors">
                                    📞 Kontak
                                </Link>
                            </div>
                            
                            <div className="flex space-x-2">
                                <Link href="/login">
                                    <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                                        Masuk
                                    </Button>
                                </Link>
                                <Link href="/register">
                                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                        Daftar
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20 text-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
                                🌟 Selamat Datang di MI Plus ANNur
                            </h1>
                            <p className="text-xl text-green-700 mb-8 leading-relaxed">
                                Sekolah Islam terpadu yang menggabungkan pendidikan akademik berkualitas 
                                dengan nilai-nilai Islam yang kuat untuk membentuk generasi berakhlak mulia.
                            </p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-12">
                                <Link href="/pendaftaran">
                                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                                        📝 Daftar Siswa Baru
                                    </Button>
                                </Link>
                                <Link href="/portal-nilai">
                                    <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-4">
                                        📊 Portal Nilai
                                    </Button>
                                </Link>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                                <div className="bg-white/80 rounded-xl p-4 shadow-lg">
                                    <div className="text-3xl text-green-600 mb-2">👨‍🏫</div>
                                    <div className="text-2xl font-bold text-green-800">{stats.teachers}</div>
                                    <div className="text-sm text-green-600">Guru Berpengalaman</div>
                                </div>
                                <div className="bg-white/80 rounded-xl p-4 shadow-lg">
                                    <div className="text-3xl text-green-600 mb-2">📚</div>
                                    <div className="text-2xl font-bold text-green-800">5</div>
                                    <div className="text-sm text-green-600">Program Unggulan</div>
                                </div>
                                <div className="bg-white/80 rounded-xl p-4 shadow-lg">
                                    <div className="text-3xl text-green-600 mb-2">📰</div>
                                    <div className="text-2xl font-bold text-green-800">{stats.news}</div>
                                    <div className="text-sm text-green-600">Berita Terkini</div>
                                </div>
                                <div className="bg-white/80 rounded-xl p-4 shadow-lg">
                                    <div className="text-3xl text-green-600 mb-2">🏆</div>
                                    <div className="text-2xl font-bold text-green-800">A</div>
                                    <div className="text-sm text-green-600">Akreditasi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Overview */}
                <section className="py-16 bg-white/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
                            🎯 Fitur & Layanan Kami
                        </h2>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="hover:shadow-xl transition-shadow border-green-200">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-green-700">
                                        <span className="text-2xl mr-3">🎓</span>
                                        Program Akademik
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">Kurikulum terintegrasi yang menggabungkan akademik dan nilai Islam</p>
                                    <Link href="/program-akademik">
                                        <Button variant="outline" className="border-green-600 text-green-600">
                                            Lihat Program
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-xl transition-shadow border-green-200">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-green-700">
                                        <span className="text-2xl mr-3">📊</span>
                                        Portal Nilai Online
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">Akses nilai dan laporan perkembangan siswa secara real-time</p>
                                    <Link href="/portal-nilai">
                                        <Button variant="outline" className="border-green-600 text-green-600">
                                            Cek Nilai
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-xl transition-shadow border-green-200">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-green-700">
                                        <span className="text-2xl mr-3">📝</span>
                                        Pendaftaran Online
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">Daftarkan putra-putri Anda dengan mudah secara online</p>
                                    <Link href="/pendaftaran">
                                        <Button variant="outline" className="border-green-600 text-green-600">
                                            Daftar Sekarang
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Latest News & Announcements */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Latest News */}
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-3xl font-bold text-green-800">📰 Berita Terkini</h2>
                                    <Link href="/berita">
                                        <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                                            Lihat Semua
                                        </Button>
                                    </Link>
                                </div>
                                
                                <div className="space-y-6">
                                    {latestNews.length > 0 ? latestNews.map((news) => (
                                        <Card key={news.id} className="hover:shadow-lg transition-shadow border-green-100">
                                            <CardContent className="p-6">
                                                <h3 className="font-semibold text-green-800 mb-2 hover:text-green-600">
                                                    <Link href={`/berita/${news.id}`}>
                                                        {news.title}
                                                    </Link>
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-3">{news.excerpt}</p>
                                                <p className="text-xs text-green-600">
                                                    {new Date(news.published_at).toLocaleDateString('id-ID')}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    )) : (
                                        <p className="text-gray-500 text-center py-8">Belum ada berita terkini</p>
                                    )}
                                </div>
                            </div>

                            {/* Announcements */}
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-3xl font-bold text-green-800">📢 Pengumuman</h2>
                                    <Link href="/pengumuman">
                                        <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                                            Lihat Semua
                                        </Button>
                                    </Link>
                                </div>
                                
                                <div className="space-y-4">
                                    {/* Urgent Announcements */}
                                    {urgentAnnouncements.map((announcement) => (
                                        <Card key={announcement.id} className="border-red-200 bg-red-50">
                                            <CardContent className="p-4">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <Badge variant="destructive" className="text-xs">
                                                                🚨 PENTING
                                                            </Badge>
                                                        </div>
                                                        <h3 className="font-semibold text-red-800 mb-1">
                                                            <Link href={`/pengumuman/${announcement.id}`}>
                                                                {announcement.title}
                                                            </Link>
                                                        </h3>
                                                        <p className="text-sm text-red-700">{announcement.content.substring(0, 100)}...</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                    
                                    {/* Regular Announcements */}
                                    {recentAnnouncements.map((announcement) => (
                                        <Card key={announcement.id} className="hover:shadow-lg transition-shadow border-green-100">
                                            <CardContent className="p-4">
                                                <h3 className="font-semibold text-green-800 mb-2">
                                                    <Link href={`/pengumuman/${announcement.id}`}>
                                                        {announcement.title}
                                                    </Link>
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-2">{announcement.content.substring(0, 100)}...</p>
                                                {announcement.event_date && (
                                                    <p className="text-xs text-green-600">
                                                        📅 {new Date(announcement.event_date).toLocaleDateString('id-ID')}
                                                        {announcement.event_time && ` • ⏰ ${announcement.event_time}`}
                                                    </p>
                                                )}
                                            </CardContent>
                                        </Card>
                                    ))}
                                    
                                    {urgentAnnouncements.length === 0 && recentAnnouncements.length === 0 && (
                                        <p className="text-gray-500 text-center py-8">Belum ada pengumuman</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Preview */}
                {featuredGallery.length > 0 && (
                    <section className="py-16 bg-white/50">
                        <div className="container mx-auto px-4">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-bold text-green-800">🖼️ Galeri Sekolah</h2>
                                <Link href="/galeri">
                                    <Button variant="outline" className="border-green-600 text-green-600">
                                        Lihat Semua
                                    </Button>
                                </Link>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {featuredGallery.map((item) => (
                                    <Link key={item.id} href={`/galeri/${item.id}`}>
                                        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-green-100">
                                            <CardContent className="p-2">
                                                <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg flex items-center justify-center">
                                                    <span className="text-4xl">🏫</span>
                                                </div>
                                                <p className="text-xs text-green-700 mt-2 text-center font-medium">
                                                    {item.title}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Contact & Location */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-green-800 mb-6">📞 Hubungi Kami</h2>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">📍</span>
                                        <div>
                                            <p className="font-semibold text-green-800">Alamat</p>
                                            <p className="text-gray-600">Jl. Pendidikan No. 123, Kota Malang, Jawa Timur</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">📞</span>
                                        <div>
                                            <p className="font-semibold text-green-800">Telepon</p>
                                            <p className="text-gray-600">(0341) 123-4567</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">✉️</span>
                                        <div>
                                            <p className="font-semibold text-green-800">Email</p>
                                            <p className="text-gray-600">info@miplusannur.sch.id</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <Link href="/kontak">
                                    <Button className="bg-green-600 hover:bg-green-700">
                                        📝 Kirim Pesan
                                    </Button>
                                </Link>
                            </div>
                            
                            <div>
                                <h2 className="text-3xl font-bold text-green-800 mb-6">⏰ Jam Operasional</h2>
                                
                                <div className="bg-white/80 rounded-xl p-6 shadow-lg">
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-green-800 font-semibold">Senin - Jumat</span>
                                            <span className="text-gray-600">07:00 - 15:30</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-green-800 font-semibold">Sabtu</span>
                                            <span className="text-gray-600">07:00 - 12:00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-green-800 font-semibold">Minggu</span>
                                            <span className="text-gray-600">Tutup</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-green-800 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <div className="flex justify-center items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🕌</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">MI Plus ANNur</h3>
                                    <p className="text-green-200">Sekolah Islam Terpadu</p>
                                </div>
                            </div>
                            
                            <p className="text-green-200 mb-6 max-w-2xl mx-auto">
                                Mendidik generasi Muslim yang berakhlak mulia, cerdas, dan berprestasi 
                                dengan landasan iman dan taqwa yang kuat.
                            </p>
                            
                            <div className="flex justify-center space-x-6 mb-8">
                                <Link href="/berita" className="text-green-200 hover:text-white transition-colors">
                                    Berita
                                </Link>
                                <Link href="/guru" className="text-green-200 hover:text-white transition-colors">
                                    Guru
                                </Link>
                                <Link href="/galeri" className="text-green-200 hover:text-white transition-colors">
                                    Galeri
                                </Link>
                                <Link href="/kontak" className="text-green-200 hover:text-white transition-colors">
                                    Kontak
                                </Link>
                            </div>
                            
                            <div className="border-t border-green-700 pt-6">
                                <p className="text-green-300 text-sm">
                                    © 2024 MI Plus ANNur. Semua hak cipta dilindungi.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}