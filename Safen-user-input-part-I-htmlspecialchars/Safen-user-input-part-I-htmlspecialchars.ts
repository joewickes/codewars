export const htmlspecialchars = (formData: string): string => {
  let finFormData = '';

  for (let i = 0; i < formData.length; i++) {
    if (formData[i] === '<') {
      finFormData += '&lt;';
    } else if (formData[i] === '>') {
      finFormData += '&gt;';
    } else if (formData[i] === '"') {
      finFormData += '&quot;';
    } else if (formData[i] === '&') {
      finFormData += '&amp;';
    } else {
      finFormData += formData[i];
    }
  }

  return finFormData;
};
