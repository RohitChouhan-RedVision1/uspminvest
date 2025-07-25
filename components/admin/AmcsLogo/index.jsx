"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import TableThree from "../Tables/TableThree"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const AmcsLogo = () => {
  const [packageData, setAllCategory] = useState([])
  const [logoCategory, setLogoCategory] = useState("")
  const [allAmcsLogos, setAllAmcsLogos] = useState([])

  const fetchCategories = async () => {
    try {
      const res = await axios.get("/api/admin/amc-category");
      setAllCategory(res.data)
      // if (res.data.length > 0 && !logoCategory) {
      //   setLogoCategory(data[0]._id) // Set initial logo category
      // }
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  const fetchAllLogos = async () => {
    try {
      const res = await axios.get("/api/admin/amcs-logo")
      setAllAmcsLogos(res.data)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  useEffect(() => {
    fetchAllLogos()
  }, [])

  useEffect(() => {
    fetchCategories()
  }, [])


  const handleStatusChange = async (id, status) => {
    try {
      const response = await axios.put(`/api/amc-logo/change-status/${id}`, {
        status: !status
      })
      if (response.status === 200) {
        toast.success("Status updated successfully.")
        fetchAllLogos()
      }
    } catch (error) {
      console.error("Error updating status:", error)
      alert("An unexpected error occurred.")
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="w-full max-w-full rounded-[10px] ">
        <div className="bg-white  px-5 py-4 rounded mb-5">
          <div className="flex justify-between">
            <h1 className="font-bold">All Amcs Logo</h1>
            <div className="flex gap-x-2">
              {packageData.map((item, index) => (
                <div className="mx-1" key={index}>
                  <Button
                    className="text-white px-3 py-1 bg-[var(--rv-primary)] hover:bg-indigo-500 rounded"
                    onClick={() => setLogoCategory(item._id)}
                  >
                    {item.title}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
          <div className="max-w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-5 gap-5">
            {allAmcsLogos.filter(logo => logo.logocategory == logoCategory)
              .length == 0 ? (
              <div>No Data Found</div>
            ) : (
              allAmcsLogos
                .filter(logo => logo.logocategory == logoCategory)
                .map((item, index) => (
                  <div
                    className={`rounded-[10px] border-2 ${item.status ? "border-green" : "border-red-500"
                      } bg-white p-2 shadow-1 dark:bg-gray-dark dark:shadow-card sm:p-4 text-center flex flex-col items-center`}
                    key={index}
                  >
                    <div className="flex justify-end gap-3 mb-3">
                      <button
                        className={`flex justify-center rounded-[7px] px-3 py-[7px] font-medium ${item.status
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-black"
                          }`}
                        type="button"
                        onClick={() =>
                          handleStatusChange(item._id, item.status)
                        }
                      >
                        {item.status ? (
                          <svg
                            className="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.99935 6.87492C8.27346 6.87492 6.87435 8.27403 6.87435 9.99992C6.87435 11.7258 8.27346 13.1249 9.99935 13.1249C11.7252 13.1249 13.1243 11.7258 13.1243 9.99992C13.1243 8.27403 11.7252 6.87492 9.99935 6.87492ZM8.12435 9.99992C8.12435 8.96438 8.96382 8.12492 9.99935 8.12492C11.0349 8.12492 11.8743 8.96438 11.8743 9.99992C11.8743 11.0355 11.0349 11.8749 9.99935 11.8749C8.96382 11.8749 8.12435 11.0355 8.12435 9.99992Z"
                              fill=""
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.99935 2.70825C6.23757 2.70825 3.70376 4.96175 2.23315 6.8723L2.20663 6.90675C1.87405 7.3387 1.56773 7.73652 1.35992 8.20692C1.13739 8.71064 1.04102 9.25966 1.04102 9.99992C1.04102 10.7402 1.13739 11.2892 1.35992 11.7929C1.56773 12.2633 1.87405 12.6611 2.20664 13.0931L2.23316 13.1275C3.70376 15.0381 6.23757 17.2916 9.99935 17.2916C13.7611 17.2916 16.2949 15.0381 17.7655 13.1275L17.792 13.0931C18.1246 12.6612 18.431 12.2633 18.6388 11.7929C18.8613 11.2892 18.9577 10.7402 18.9577 9.99992C18.9577 9.25966 18.8613 8.71064 18.6388 8.20692C18.431 7.73651 18.1246 7.33868 17.792 6.90673L17.7655 6.8723C16.2949 4.96175 13.7611 2.70825 9.99935 2.70825ZM3.2237 7.63475C4.58155 5.87068 6.79132 3.95825 9.99935 3.95825C13.2074 3.95825 15.4172 5.87068 16.775 7.63475C17.1405 8.10958 17.3546 8.3933 17.4954 8.71204C17.627 9.00993 17.7077 9.37403 17.7077 9.99992C17.7077 10.6258 17.627 10.9899 17.4954 11.2878C17.3546 11.6065 17.1405 11.8903 16.775 12.3651C15.4172 14.1292 13.2074 16.0416 9.99935 16.0416C6.79132 16.0416 4.58155 14.1292 3.2237 12.3651C2.85821 11.8903 2.64413 11.6065 2.50332 11.2878C2.37171 10.9899 2.29102 10.6258 2.29102 9.99992C2.29102 9.37403 2.37171 9.00993 2.50332 8.71204C2.64413 8.3933 2.85821 8.10958 3.2237 7.63475Z"
                              fill=""
                            />
                          </svg>
                        ) : (
                          <Image
                            src={"/images/icon/eyehide.svg"}
                            width={20}
                            height={20}
                            alt="icon"
                            className="text-white"
                          />
                        )}
                      </button>
                      <button
                        className="flex justify-center rounded-[7px] border border-stroke px-3 py-[7px] font-medium text-dark hover:shadow-1 dark:border-dark-3 dark:text-white hover:dark:text-red-500"
                        type="submit"
                        onClick={() => handleDeleteAmcLogo(item._id)}
                      >
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.59048 1.87502H11.4084C11.5887 1.8749 11.7458 1.8748 11.8941 1.89849C12.4802 1.99208 12.9874 2.35762 13.2615 2.88403C13.3309 3.01727 13.3805 3.16634 13.4374 3.33745L13.5304 3.61654C13.5461 3.66378 13.5506 3.67715 13.5545 3.68768C13.7004 4.09111 14.0787 4.36383 14.5076 4.3747C14.5189 4.37498 14.5327 4.37503 14.5828 4.37503H17.0828C17.4279 4.37503 17.7078 4.65485 17.7078 5.00003C17.7078 5.34521 17.4279 5.62503 17.0828 5.62503H2.91602C2.57084 5.62503 2.29102 5.34521 2.29102 5.00003C2.29102 4.65485 2.57084 4.37503 2.91602 4.37503H5.41609C5.46612 4.37503 5.47993 4.37498 5.49121 4.3747C5.92009 4.36383 6.29844 4.09113 6.44437 3.6877C6.44821 3.67709 6.45262 3.66401 6.46844 3.61654L6.56145 3.33747C6.61836 3.16637 6.66795 3.01728 6.73734 2.88403C7.01146 2.35762 7.51862 1.99208 8.1047 1.89849C8.25305 1.8748 8.41016 1.8749 8.59048 1.87502ZM7.50614 4.37503C7.54907 4.29085 7.5871 4.20337 7.61983 4.1129C7.62977 4.08543 7.63951 4.05619 7.65203 4.01861L7.7352 3.7691C7.81118 3.54118 7.82867 3.49469 7.84602 3.46137C7.9374 3.2859 8.10645 3.16405 8.30181 3.13285C8.33892 3.12693 8.38854 3.12503 8.6288 3.12503H11.37C11.6103 3.12503 11.6599 3.12693 11.697 3.13285C11.8924 3.16405 12.0614 3.2859 12.1528 3.46137C12.1702 3.49469 12.1877 3.54117 12.2636 3.7691L12.3468 4.01846L12.379 4.11292C12.4117 4.20338 12.4498 4.29085 12.4927 4.37503H7.50614Z"
                            fill=""
                          />
                          <path
                            d="M4.92859 7.04179C4.90563 6.69738 4.60781 6.43679 4.2634 6.45975C3.91899 6.48271 3.6584 6.78053 3.68136 7.12494L4.06757 12.9181C4.13881 13.987 4.19636 14.8505 4.33134 15.528C4.47167 16.2324 4.71036 16.8208 5.20335 17.2821C5.69635 17.7433 6.2993 17.9423 7.01151 18.0355C7.69653 18.1251 8.56189 18.125 9.63318 18.125H10.3656C11.4369 18.125 12.3023 18.1251 12.9873 18.0355C13.6995 17.9423 14.3025 17.7433 14.7955 17.2821C15.2885 16.8208 15.5272 16.2324 15.6675 15.528C15.8025 14.8505 15.86 13.987 15.9313 12.9181L16.3175 7.12494C16.3404 6.78053 16.0798 6.48271 15.7354 6.45975C15.391 6.43679 15.0932 6.69738 15.0702 7.04179L14.687 12.7911C14.6121 13.9143 14.5587 14.6958 14.4416 15.2838C14.328 15.8542 14.1693 16.1561 13.9415 16.3692C13.7137 16.5824 13.4019 16.7206 12.8252 16.796C12.2307 16.8738 11.4474 16.875 10.3217 16.875H9.67718C8.55148 16.875 7.76814 16.8738 7.17364 16.796C6.59697 16.7206 6.28518 16.5824 6.05733 16.3692C5.82949 16.1561 5.67088 15.8542 5.55725 15.2838C5.44011 14.6958 5.38675 13.9143 5.31187 12.7911L4.92859 7.04179Z"
                            fill=""
                          />
                          <path
                            d="M7.8539 8.5448C8.19737 8.51045 8.50364 8.76104 8.53799 9.10451L8.95466 13.2712C8.989 13.6146 8.73841 13.9209 8.39495 13.9553C8.05148 13.9896 7.74521 13.739 7.71086 13.3956L7.29419 9.22889C7.25985 8.88542 7.51044 8.57915 7.8539 8.5448Z"
                            fill=""
                          />
                          <path
                            d="M12.1449 8.5448C12.4884 8.57915 12.739 8.88542 12.7047 9.22889L12.288 13.3956C12.2536 13.739 11.9474 13.9896 11.6039 13.9553C11.2604 13.9209 11.0098 13.6146 11.0442 13.2712L11.4609 9.10451C11.4952 8.76104 11.8015 8.51045 12.1449 8.5448Z"
                            fill=""
                          />
                        </svg>
                      </button>
                      <button
                        className="flex justify-center rounded-[7px] border border-gray-700 px-3 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
                        type="submit"
                        onClick={() => handleEditModelOpen(item._id)}
                      >
                        <Image
                          src={"/images/icon/pen.svg"}
                          width={20}
                          height={20}
                          alt="icon"
                          className="text-white"
                        />
                      </button>
                    </div>
                    <div className="my-4">
                      {item.logo && typeof item?.logo !== "string" ? (
                        <Image
                          // Generate a temporary URL for File
                          src={URL.createObjectURL(item.logo)}
                          width={150}
                          height={100}
                          alt="Uploaded Logo"
                        />
                      ) : (
                        <Image
                          // Use string or fallback placeholder
                          src={item.logo || "/placeholder-image.jpg"}
                          width={150}
                          height={100}
                          alt="Logo"
                        />
                      )}
                    </div>
                    <p className="font-semibold">{item.logoname}</p>
                  </div>
                ))
            )}
          </div>
        </div> */}
      </div>
    </>
  )
}

export default AmcsLogo
