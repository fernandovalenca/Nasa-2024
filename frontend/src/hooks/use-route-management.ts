import { removeEmptyValues } from "@/lib/utils/remove-empty-values";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

type QueryParams = { [key: string]: string };

type UpdateRouteQueryParams = { [key: string]: string | string[] | null };

type UseRouteManagement = {
  searchParams: ReadonlyURLSearchParams;
  updateRoute: (queryParams: UpdateRouteQueryParams) => void;
};

export function useRouteManagement(): UseRouteManagement {
  const router = useRouter();
  const searchParams = useSearchParams();
  const previousSearchParams = useRef<QueryParams>({});

  const updateRoute = useCallback(
    (queryParams: UpdateRouteQueryParams) => {
      const updatedParams: QueryParams = { ...previousSearchParams.current };

      for (const [key, value] of Object.entries(queryParams)) {
        if (value !== null && value !== undefined) {
          updatedParams[key] = Array.isArray(value) ? value.join(",") : value;
        } else {
          delete updatedParams[key];
        }
      }

      const path = window.location.pathname;
      const searchString = new URLSearchParams(
        removeEmptyValues(updatedParams)
      ).toString();

      router.push(`${path}?${searchString}`, { scroll: false });
    },
    [router]
  );

  const setPreviousSearchParams = useCallback(() => {
    const currentParams: QueryParams = {};
    for (const [key, value] of Array.from(searchParams.entries())) {
      currentParams[key] = value;
    }
    previousSearchParams.current = currentParams;
  }, [searchParams]);

  useEffect(() => {
    setPreviousSearchParams();
  }, [setPreviousSearchParams]);

  return { searchParams, updateRoute };
}
