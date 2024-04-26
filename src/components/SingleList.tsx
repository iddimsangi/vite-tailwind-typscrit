const SingleList = () => {
  return (
    <div className="flex items-center justify-center font-medium my-3">
      <div className="flex flex-grow items-center justify-center h-full text-gray-600">
        <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-3/4">
          <div className="relative">
            <button
              className="absolute right-0 p-1 mt-1 text-red-400 fill-current select-none cursor-pointer hover:bg-red-200 hover:rounded-lg active:bg-red-400
                    fa fa-trash"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z"
                  fill="#292D32"
                />
                <path
                  opacity="0.3991"
                  d="M19.2297 8.14C18.9897 7.89 18.6597 7.75 18.3197 7.75H5.67975C5.33975 7.75 4.99975 7.89 4.76975 8.14C4.53975 8.39 4.40975 8.73 4.42975 9.08L5.04975 19.34C5.15975 20.86 5.29975 22.76 8.78975 22.76H15.2097C18.6997 22.76 18.8398 20.87 18.9497 19.34L19.5697 9.09C19.5897 8.73 19.4597 8.39 19.2297 8.14Z"
                  fill="#292D32"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.58008 17C9.58008 16.5858 9.91586 16.25 10.3301 16.25H13.6601C14.0743 16.25 14.4101 16.5858 14.4101 17C14.4101 17.4142 14.0743 17.75 13.6601 17.75H10.3301C9.91586 17.75 9.58008 17.4142 9.58008 17Z"
                  fill="#292D32"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.75 13C8.75 12.5858 9.08579 12.25 9.5 12.25H14.5C14.9142 12.25 15.25 12.5858 15.25 13C15.25 13.4142 14.9142 13.75 14.5 13.75H9.5C9.08579 13.75 8.75 13.4142 8.75 13Z"
                  fill="#292D32"
                />
              </svg>
            </button>
             <button
              className="absolute right-8 p-1 mt-1 text-green-400 fill-current select-none cursor-pointer hover:bg-red-200 hover:rounded-lg active:bg-red-400
                    fa fa-pencil-square-o"
            >
             Edit
            </button>

            <input className="hidden" type="checkbox" id="task_1" checked />
            <label
              className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
              htmlFor="task_1"
            >
              <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span className="ml-4 text-sm">Weed front garden.</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleList;
