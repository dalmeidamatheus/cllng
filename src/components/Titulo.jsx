export default function Titulo({ children }) {
    return (
      <div className="flex justify-center">
        <h2 className="text-2xl m-4 leading-6">
          <span className="border-b-4 border-yellow-500 pb-2">{children}</span>
        </h2>
      </div>
    );
  }
  