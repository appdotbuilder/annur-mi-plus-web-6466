import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface News {
    id: number;
    title: string;
    content: string;
    excerpt?: string;
    published_at: string;
    image?: string;
}

interface Props {
    news: News;
    relatedNews: News[];
    [key: string]: unknown;
}

export default function NewsShow({ news, relatedNews }: Props) {
    return (
        <>
            <Head title={`${news.title} - MI Plus ANNur`} />
            
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
                                <Link href="/berita">
                                    <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                                        ← Berita Lainnya
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

                <div className="container mx-auto px-4 py-12">
                    {/* Article */}
                    <article className="max-w-4xl mx-auto">
                        <Card className="border-green-100 shadow-xl">
                            <CardContent className="p-8">
                                {/* Meta Info */}
                                <div className="flex items-center space-x-4 mb-6 text-sm text-green-600">
                                    <span className="flex items-center">
                                        📅 {new Date(news.published_at).toLocaleDateString('id-ID', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 leading-tight">
                                    {news.title}
                                </h1>

                                {/* Featured Image Placeholder */}
                                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl flex items-center justify-center mb-8">
                                    <span className="text-6xl">📰</span>
                                </div>

                                {/* Content */}
                                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                    {news.content.split('\n').map((paragraph, index) => (
                                        <p key={index} className="mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Share */}
                                <div className="mt-8 pt-6 border-t border-green-100">
                                    <p className="text-green-600 font-semibold mb-4">📢 Bagikan Berita Ini:</p>
                                    <div className="flex space-x-3">
                                        <Button 
                                            variant="outline" 
                                            size="sm"
                                            className="border-green-600 text-green-600"
                                            onClick={() => {
                                                if (navigator.share) {
                                                    navigator.share({
                                                        title: news.title,
                                                        url: window.location.href
                                                    });
                                                } else {
                                                    navigator.clipboard.writeText(window.location.href);
                                                    alert('Link berhasil disalin!');
                                                }
                                            }}
                                        >
                                            🔗 Salin Link
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </article>

                    {/* Related News */}
                    {relatedNews.length > 0 && (
                        <div className="max-w-4xl mx-auto mt-16">
                            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
                                📰 Berita Terkait
                            </h2>
                            
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedNews.map((relatedItem) => (
                                    <Card key={relatedItem.id} className="hover:shadow-lg transition-shadow border-green-100">
                                        <CardContent className="p-6">
                                            <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg flex items-center justify-center mb-4">
                                                <span className="text-2xl">📰</span>
                                            </div>
                                            
                                            <h3 className="font-bold text-green-800 mb-2 line-clamp-2">
                                                <Link href={`/berita/${relatedItem.id}`} className="hover:text-green-600">
                                                    {relatedItem.title}
                                                </Link>
                                            </h3>
                                            
                                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                                {relatedItem.excerpt || relatedItem.title}
                                            </p>
                                            
                                            <p className="text-xs text-green-600">
                                                📅 {new Date(relatedItem.published_at).toLocaleDateString('id-ID')}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
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