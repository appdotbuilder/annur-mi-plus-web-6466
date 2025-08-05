import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface News {
    id: number;
    title: string;
    excerpt: string;
    published_at: string;
    image?: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    news: {
        data: News[];
        links: PaginationLink[];
        meta: {
            current_page: number;
            last_page: number;
            per_page: number;
            total: number;
        };
    };
    search?: string;
    [key: string]: unknown;
}

export default function NewsIndex({ news, search }: Props) {
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchTerm = formData.get('search') as string;
        
        router.get('/berita', { search: searchTerm }, {
            preserveState: true,
            preserveScroll: true
        });
    };

    return (
        <>
            <Head title="Berita - MI Plus ANNur" />
            
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
                            📰 Berita Sekolah
                        </h1>
                        <p className="text-xl text-green-700 max-w-2xl mx-auto">
                            Ikuti perkembangan terkini dan kegiatan-kegiatan menarik di MI Plus ANNur
                        </p>
                    </div>

                    {/* Search */}
                    <div className="max-w-md mx-auto mb-12">
                        <form onSubmit={handleSearch} className="flex gap-2">
                            <Input
                                name="search"
                                placeholder="Cari berita..."
                                defaultValue={search || ''}
                                className="border-green-200 focus:border-green-500"
                            />
                            <Button type="submit" className="bg-green-600 hover:bg-green-700">
                                🔍 Cari
                            </Button>
                        </form>
                    </div>

                    {/* News Grid */}
                    {news.data.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {news.data.map((newsItem) => (
                                <Card key={newsItem.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100">
                                    <CardContent className="p-6">
                                        <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg flex items-center justify-center mb-4">
                                            <span className="text-4xl">📰</span>
                                        </div>
                                        
                                        <h2 className="text-xl font-bold text-green-800 mb-3 line-clamp-2">
                                            <Link href={`/berita/${newsItem.id}`} className="hover:text-green-600">
                                                {newsItem.title}
                                            </Link>
                                        </h2>
                                        
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {newsItem.excerpt || newsItem.title}
                                        </p>
                                        
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-green-600">
                                                📅 {new Date(newsItem.published_at).toLocaleDateString('id-ID')}
                                            </span>
                                            <Link href={`/berita/${newsItem.id}`}>
                                                <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                                                    Baca Selengkapnya
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📰</div>
                            <h2 className="text-2xl font-bold text-green-800 mb-4">Belum Ada Berita</h2>
                            <p className="text-green-600 mb-8">
                                {search ? `Tidak ditemukan berita dengan kata kunci "${search}"` : 'Berita akan segera hadir di sini'}
                            </p>
                            {search && (
                                <Link href="/berita">
                                    <Button className="bg-green-600 hover:bg-green-700">
                                        Lihat Semua Berita
                                    </Button>
                                </Link>
                            )}
                        </div>
                    )}

                    {/* Pagination */}
                    {news.links && news.links.length > 3 && (
                        <div className="flex justify-center space-x-2">
                            {news.links.map((link, index) => (
                                <Button
                                    key={index}
                                    variant={link.active ? "default" : "outline"}
                                    size="sm"
                                    disabled={!link.url}
                                    onClick={() => link.url && router.visit(link.url)}
                                    className={link.active ? "bg-green-600 hover:bg-green-700" : "border-green-600 text-green-600"}
                                >
                                    <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                </Button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <footer className="bg-green-800 text-white py-8">
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