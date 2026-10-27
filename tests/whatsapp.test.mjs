import test from 'node:test';
import assert from 'node:assert/strict';

// Helper tests for phone number sanitization and WhatsApp link generation
function formatPhoneForTel(phone) {
  if (!phone) return '';
  const digits = phone.replace(/[^\d]/g, '');
  if (!digits) return '';

  if (digits.startsWith('00966')) {
    return '+' + digits.slice(2);
  }
  if (digits.startsWith('05') && digits.length === 10) {
    return '+966' + digits.slice(1);
  }
  if (digits.startsWith('966')) {
    return '+' + digits;
  }
  if (digits.length === 9 && digits.startsWith('5')) {
    return '+966' + digits;
  }
  return '+' + digits;
}

function formatWhatsAppNumber(phone) {
  if (!phone) return '';
  const digits = phone.replace(/[^\d]/g, '');
  if (!digits) return '';

  if (digits.startsWith('00966')) {
    return digits.slice(2);
  }
  if (digits.startsWith('05') && digits.length === 10) {
    return '966' + digits.slice(1);
  }
  if (digits.startsWith('966')) {
    return digits;
  }
  if (digits.length === 9 && digits.startsWith('5')) {
    return '966' + digits;
  }
  return digits;
}

function formatPhoneDisplay(phone) {
  if (!phone) return '';
  const digits = phone.replace(/[^\d]/g, '');
  let raw966 = digits;
  if (digits.startsWith('05') && digits.length === 10) {
    raw966 = '966' + digits.slice(1);
  } else if (digits.length === 9 && digits.startsWith('5')) {
    raw966 = '966' + digits;
  } else if (digits.startsWith('00966')) {
    raw966 = digits.slice(2);
  }
  if (raw966.startsWith('966') && raw966.length === 12) {
    return `+${raw966.slice(0, 3)} ${raw966.slice(3, 5)} ${raw966.slice(5, 8)} ${raw966.slice(8)}`;
  }
  return phone;
}

function createWhatsAppLink(number, params) {
  const cleanNumber = formatWhatsAppNumber(number);
  if (!cleanNumber) return '#contact';

  let message = `السلام عليكم ورحمة الله، أود الاستفسار عن خدمات التشطيب والديكور لدى رونق أبها للتشطيبات والديكورات.`;
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

test('formatPhoneForTel formats international numbers for tel: links without duplicating country code', () => {
  assert.equal(formatPhoneForTel('966560979886'), '+966560979886');
  assert.equal(formatPhoneForTel('+966 56 097 9886'), '+966560979886');
  assert.equal(formatPhoneForTel('0560979886'), '+966560979886');
  assert.equal(formatPhoneForTel('00966560979886'), '+966560979886');
});

test('formatWhatsAppNumber extracts clean international digits for wa.me without duplicating country code', () => {
  assert.equal(formatWhatsAppNumber('966560979886'), '966560979886');
  assert.equal(formatWhatsAppNumber('+966 56 097 9886'), '966560979886');
  assert.equal(formatWhatsAppNumber('0560979886'), '966560979886');
  assert.equal(formatWhatsAppNumber('00966560979886'), '966560979886');
});

test('formatPhoneDisplay formats phone numbers into readable visual text', () => {
  assert.equal(formatPhoneDisplay('966560979886'), '+966 56 097 9886');
  assert.equal(formatPhoneDisplay('+966560979886'), '+966 56 097 9886');
  assert.equal(formatPhoneDisplay('0560979886'), '+966 56 097 9886');
});

test('createWhatsAppLink creates a valid https URL with encoded arabic query and exact confirmed phone', () => {
  const url = createWhatsAppLink('966560979886', {
    serviceTitle: 'التشطيب المتكامل',
    approxArea: '400',
  });

  assert.ok(url.startsWith('https://wa.me/966560979886?text='));
  assert.ok(url.includes(encodeURIComponent('رونق أبها للتشطيبات والديكورات')));
  assert.ok(url.includes(encodeURIComponent('التشطيب المتكامل')));
  assert.ok(url.includes(encodeURIComponent('400')));
});

test('createWhatsAppLink handles missing or empty phone safely', () => {
  const url = createWhatsAppLink('', { serviceTitle: 'test' });
  assert.equal(url, '#contact');
});
