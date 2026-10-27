'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Layers, MessageSquare, ArrowUpRight } from 'lucide-react';
import { projectsData, projectCategories } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { createWhatsAppLink } from '@/lib/whatsapp';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#E5E2DA]">
      <Container size="wide">
        <SectionHeading
          badge="نماذج معمارية"
          title="نماذج وتصاميم معمارية مقترحة"
          subtitle="استعرض نماذج وأساليب تشطيب معمارية توضح خيارات المواد، الإضاءة، والتوزيع الفراغي لمشروعك في أبها"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#111827] text-white shadow-sm'
                    : 'bg-white text-[#5E6672] border border-[#E5E2DA] hover:bg-[#F3F1EC] hover:text-[#181C20]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-2xl bg-white border border-[#E5E2DA] overflow-hidden hover:border-[#C59B27]/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Architectural Visual Banner with Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden text-white flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-br from-[#1F2937] to-[#111827] group">
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt || project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {/* Soft gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[#C59B27] border border-[#C59B27]/30 shadow-xs">
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#C59B27]" aria-hidden="true" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white line-clamp-2 drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs sm:text-sm text-[#5E6672] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#181C20] mb-2.5">
                      <Layers className="w-3.5 h-3.5 text-[#C59B27]" aria-hidden="true" />
                      <span>نطاق الأعمال المشمول:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.scope.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-[#FAF9F6] border border-[#E5E2DA] text-[#5E6672] px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct quote for similar project */}
                <div className="pt-4 border-t border-[#F0EEE8] flex items-center justify-between">
                  <span className="text-xs text-[#5E6672]">هل يناسبك نمط هذا المشروع؟</span>
                  <a
                    href={createWhatsAppLink({
                      serviceTitle: project.title,
                      projectType: project.categoryLabel,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#C59B27] hover:underline"
                  >
                    <span>طلب استفسار مماثل</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Notice on custom projects */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#E5E2DA] max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#5E6672] leading-relaxed">
            ملاحظة: النماذج والتصاميم المعروضة هي نماذج تصميمية مقترحة لتوضيح أساليب التشطيب والمواد المتاحة. يتم تصميم وتنفيذ كل مشروع في أبها بشكل مخصص ومستقل وفق المخططات المعمارية المعتمدة للعميل.
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#111827] hover:text-[#C59B27] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#C59B27]" aria-hidden="true" />
              <span>شاركنا أبعاد ومخطط عقارك في أبها للحصول على دراسة مبدئية</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
