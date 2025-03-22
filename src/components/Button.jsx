export default function Button({ text }) {
    return (
        <button className="bg-gray-100 text-black px-4 py-2 rounded-2xl block mx-auto hover:bg-black hover:text-white">
          {text}
        </button>
      );
}