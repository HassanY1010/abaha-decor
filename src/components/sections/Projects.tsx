'use client';

import React, { useState } from 'react';
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
          badge="نماذج الأعمال"
          title="معرض المشاريع والأعمال المنفذة"
          subtitle="استعرض نماذج وتصاميم متنوعة تعكس معاييرنا العالية في اختيار المواد ودقة اللمسات النهائية"
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
              {/* Architectural Visual Banner */}
              <div className="relative h-48 bg-gradient-to-br from-[#1F2937] via-[#111827] to-[#0F172A] p-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-xs text-[#C59B27]">
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-gray-300">
                    <MapPin className="w-3.5 h-3.5 text-[#C59B27]" aria-hidden="true" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col justify-between flex-1">
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
          <p className="text-sm text-[#5E6672]">
            هل لديك مخطط أو فكرة خاصة ترغب في تنفيذها على أرض الواقع؟
          </p>
          <div className="mt-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#111827] hover:text-[#C59B27] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#C59B27]" aria-hidden="true" />
              <span>شاركنا تفاصيل مشروعك للحصول على دراسة مبدئية مجانية</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
