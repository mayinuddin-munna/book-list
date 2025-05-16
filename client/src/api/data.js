export default async function data() {
  const dua = await fetch("http://localhost:5000/api/v1/dua");

  return dua.json();
}
