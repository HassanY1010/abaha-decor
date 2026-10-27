import test from 'node:test';
import assert from 'node:assert/strict';

// Helper tests for phone number sanitization and WhatsApp link generation
function formatPhoneForTel(phone) {
  return phone.replace(/[^\d+]/g, '');
}

function formatWhatsAppNumber(phone) {
  const digits = phone.replace(/[^\d]/g, '');
  if (digits.startsWith('05') && digits.length === 10) {
    return '966' + digits.slice(1);
  }
  return digits;
}

function createWhatsAppLink(number, params) {
  const cleanNumber = formatWhatsAppNumber(number);
  if (!cleanNumber) return '#contact';

  let message = `السلام عليكم ورحمة الله، أود الاستفسار عن خدمات التشطيب والديكور.`;
  if (params) {
    const details = [];
    if (params.serviceTitle) details.push(`- الخدمة المطلوبة: ${params.serviceTitle}`);
    if (params.projectType) details.push(`- نوع العقار: ${params.projectType}`);
    if (params.approxArea) details.push(`- المساحة التقديرية: ${params.approxArea} م²`);
    if (details.length > 0) {
      message += `\n\nتفاصيل المشروع:\n` + details.join('\n');
    }
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

test('formatPhoneForTel strips spaces, dashes and non-numeric characters except +', () => {
  assert.equal(formatPhoneForTel('+966 50 000 0000'), '+966500000000');
  assert.equal(formatPhoneForTel('050-000-0000'), '0500000000');
});

test('formatWhatsAppNumber extracts raw digits for WhatsApp international URL', () => {
  assert.equal(formatWhatsAppNumber('+966-50-000-0000'), '966500000000');
  assert.equal(formatWhatsAppNumber('966500000000'), '966500000000');
  assert.equal(formatWhatsAppNumber('0500000000'), '966500000000');
});

test('createWhatsAppLink creates a valid https URL with encoded arabic query', () => {
  const url = createWhatsAppLink('966500000000', {
    serviceTitle: 'التشطيب المتكامل',
    approxArea: '400',
  });

  assert.ok(url.startsWith('https://wa.me/966500000000?text='));
  assert.ok(url.includes(encodeURIComponent('التشطيب المتكامل')));
  assert.ok(url.includes(encodeURIComponent('400')));
});

test('createWhatsAppLink handles missing or empty phone safely', () => {
  const url = createWhatsAppLink('', { serviceTitle: 'test' });
  assert.equal(url, '#contact');
});
