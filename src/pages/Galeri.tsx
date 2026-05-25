import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ZoomIn } from 'lucide-react';
import images from '../assets/images';
import CarbonParticles from '../components/CarbonParticles';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

const Galeri: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categoryLabelMap: Record<string, string> = {
    'Semua': t('galeri.categoryAll'),
    'Kemitraan': t('galeri.categoryPartnership'),
    'Internasional': t('galeri.categoryInternational'),
    'Kolaborasi': t('galeri.categoryCollaboration'),
  };

  const getCategoryLabel = (cat: string) => categoryLabelMap[cat] || cat;

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      ...images.pksPenandatangan1,
      category: 'Kemitraan',
      title: t('galeri.image1Title'),
      description: t('galeri.image1Desc')
    },
    {
      id: 2,
      ...images.pksPenandatangan2,
      category: 'Kemitraan',
      title: t('galeri.image2Title'),
      description: t('galeri.image2Desc')
    },
    {
      id: 5,
      ...images.artikel3Img1,
      category: 'Kolaborasi',
      title: t('galeri.image5Title'),
      description: t('galeri.image5Desc')
    },
    {
      id: 6,
      ...images.artikel3Img2,
      category: 'Kolaborasi',
      title: t('galeri.image6Title'),
      description: t('galeri.image6Desc')
    }
  ];

  const categoryKeys = ['Semua', 'Kemitraan', 'Internasional', 'Kolaborasi'];
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredImages = selectedCategory === 'Semua' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <CarbonParticles />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('galeri.heroTitle')}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {t('galeri.heroDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 sticky top-16 lg:top-20 z-10 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categoryKeys.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-emerald-900/50 hover:text-forest-light'
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-4 w-4 text-gray-300" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      image.category === 'Kemitraan' ? 'bg-emerald-100 text-emerald-600' :
                      image.category === 'Internasional' ? 'bg-blue-100 text-blue-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {getCategoryLabel(image.category)}
                    </span>
                  </div>
                  
                  {/* Title and Description */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">{t('galeri.noImages')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="text-white">
                <span className={`inline-block px-3 py-1 rounded text-sm font-medium mb-2 ${
                  selectedImage.category === 'Kemitraan' ? 'bg-emerald-600' :
                  selectedImage.category === 'Internasional' ? 'bg-blue-600' :
                  'bg-purple-600'
                }`}>
                  {getCategoryLabel(selectedImage.category)}
                </span>
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Galeri;
